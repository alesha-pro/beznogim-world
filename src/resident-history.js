import './resident-history.css';
import {readPublicJson} from './public-read.js';

// A public diary: authored monologues and successful world actions only.
export function createResidentHistory({api,enabled}) {
  if(!enabled)return;
  const LIMIT=600, entries=new Map(), mobile=matchMedia('(max-width: 900px)');
  const clock=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Moscow',hour:'2-digit',minute:'2-digit'});
  const day=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Moscow',day:'numeric',month:'long'});
  const types=new Set(['muse','say','move','interact','wait','cancel','extension','release','cancelled']);
  const CACHE='beznogim-public-notes-v1';
  let filter='all',open=!mobile.matches,loaded=false,archiveLoaded=false,fetching=false,failed=false,hasOlder=false,unread=0,lastState=null,lastReceived=0,cachedAt=0;
  let lastFetch=0,cacheDirty=false;
  try{const saved=localStorage.getItem(mobile.matches?'head-notes-mobile':'head-notes-desktop');if(saved!==null)open=saved==='open';}catch{}
  const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;};
  const panel=el('aside','resident-history');panel.id='resident-history';panel.setAttribute('aria-label','История мыслей и действий Головы');
  const header=el('div','history-heading'),identity=el('div'),eyebrow=el('div','history-eyebrow','ДНЕВНИК БЕЗ НОГ');
  const title=el('h3','','на полях'),eyes=el('span','history-eyes');eyes.setAttribute('aria-hidden','true');title.append(eyes);
  identity.append(eyebrow,title,el('p','history-subtitle','мысли, дела и прочее'));
  const close=el('button','history-close','−');close.type='button';close.setAttribute('aria-label','Свернуть историю');close.title='Свернуть историю';
  header.append(identity,close);
  const tabs=el('div','history-filters');tabs.setAttribute('role','group');tabs.setAttribute('aria-label','Показывать в истории');
  const filters=[['all','всё'],['thoughts','мысли'],['actions','дела']];
  for(const [value,label] of filters){const b=el('button','',label);b.type='button';b.dataset.filter=value;b.setAttribute('aria-pressed',String(filter===value));b.onclick=()=>{filter=value;render(false);scroller.scrollTop=0;for(const t of tabs.children)t.setAttribute('aria-pressed',String(t.dataset.filter===filter));};tabs.append(b);}
  const newButton=el('button','history-new');newButton.type='button';newButton.hidden=true;
  const scroller=el('div','history-scroll');scroller.tabIndex=0;scroller.setAttribute('aria-label','Записи, от новых к старым');
  const list=el('ol','history-list'),empty=el('p','history-empty','собираю заметки…');scroller.append(list,empty);
  const foot=el('div','history-foot'),live=el('span','history-live','подключаюсь…'),count=el('span','history-count');const retry=el('button','history-retry','повторить подключение');retry.type='button';retry.hidden=true;
  retry.onclick=()=>{fetchHistory();window.dispatchEvent(new Event('beznogim:retry'));};
  foot.append(live,count,retry);
  panel.append(header,tabs,newButton,scroller,foot);
  const toggle=el('button','history-toggle');toggle.type='button';toggle.setAttribute('aria-controls',panel.id);
  const toggleLabel=el('span','','на полях'),badge=el('span','history-badge');badge.hidden=true;toggle.append(el('span','history-toggle-icon','◌'),toggleLabel,badge);
  document.body.append(panel,toggle);
  function setOpen(value,save=true){
    open=value;panel.hidden=!open;toggle.hidden=open;toggle.setAttribute('aria-expanded',String(open));
    if(save)try{localStorage.setItem(mobile.matches?'head-notes-mobile':'head-notes-desktop',open?'open':'closed');}catch{}
    if(open){if(scroller.scrollTop<30)clearUnread();else showUnread();close.focus({preventScroll:true});}else if(save)toggle.focus({preventScroll:true});
  }
  // Initial open panels should never steal focus from world controls.
  panel.hidden=!open;toggle.hidden=open;toggle.setAttribute('aria-expanded',String(open));
  toggle.onclick=()=>{setOpen(true);if(failed||!archiveLoaded)fetchHistory();};close.onclick=()=>setOpen(false);
  mobile.addEventListener('change',()=>{let next=!mobile.matches;try{const saved=localStorage.getItem(mobile.matches?'head-notes-mobile':'head-notes-desktop');if(saved!==null)next=saved==='open';}catch{}setOpen(next,false);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open&&!document.querySelector('dialog[open]'))setOpen(false);});
  function clearUnread(){unread=0;badge.hidden=true;newButton.hidden=true;}
  function showUnread(){badge.textContent=String(unread);badge.hidden=!unread;newButton.textContent=`↑ к новым · ${unread}`;newButton.hidden=!(open&&unread);}
  newButton.onclick=()=>{scroller.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});clearUnread();};
  scroller.addEventListener('scroll',()=>{if(scroller.scrollTop<30)clearUnread();},{passive:true});
  function visible(e){return filter==='all'||(filter==='thoughts'?e.type==='muse'||e.type==='say':e.type!=='muse'&&e.type!=='say');}
  function makeEntry(e,fresh){
    const thought=e.type==='muse'||e.type==='say',li=el('li',`history-entry ${thought?'history-thought':'history-action'}${fresh?' is-new':''}`);li.dataset.eventId=String(e.id);li.dataset.type=e.type;
    const meta=el('div','history-meta'),time=el('time','',clock.format(e.time*1000));time.dateTime=new Date(e.time*1000).toISOString();time.title=day.format(e.time*1000)+' · '+time.textContent+' мск';
    const labels={muse:'про себя',say:'вслух',release:'новая глава',wait:'без спешки'};
    meta.append(el('span','',labels[e.type]||'во дворе'),time);li.append(meta,el('p','',e.text));
    return li;
  }
  function render(animate,newIds=new Set()){
    // Keep the first visible record anchored while new lines arrive above it.
    const reading=scroller.scrollTop>30,top=scroller.getBoundingClientRect().top;
    const anchor=reading?[...list.querySelectorAll('[data-event-id]')].find(n=>n.getBoundingClientRect().bottom>top):null;
    const anchorId=anchor?.dataset.eventId,anchorY=anchor?.getBoundingClientRect().top;
    const oldScroll=scroller.scrollTop,fragment=document.createDocumentFragment();let lastDay='';
    const ordered=[...entries.values()].sort((a,b)=>b.id-a.id).filter(visible);
    for(const e of ordered){
      const d=day.format(e.time*1000);if(d!==lastDay){const marker=el('li','history-day',d);fragment.append(marker);lastDay=d;}
      fragment.append(makeEntry(e,animate&&newIds.has(e.id)&&!reading));
    }
    list.replaceChildren(fragment);empty.hidden=ordered.length>0;
    empty.textContent=failed?'не удалось связаться с сервером. это не пустой дневник.':archiveLoaded?'пока ни строчки. пусть поживёт.':'собираю заметки…';
    if(entries.size&&!ordered.length)empty.textContent='в этом фильтре пока нет записей.';
    count.textContent=entries.size?(hasOlder?`последние ${entries.size} · мск`:`записей: ${entries.size} · мск`):archiveLoaded?'записей: 0 · мск':'записи ещё не загружены';
    retry.hidden=!(failed||(!archiveLoaded&&!fetching));retry.disabled=fetching;
    if(anchorId){const node=list.querySelector(`[data-event-id="${anchorId}"]`);scroller.scrollTop=oldScroll+(node?node.getBoundingClientRect().top-anchorY:0);}
    else if(!reading)scroller.scrollTop=0;
  }
  function merge(history,fromArchive=false){
    if(!history||!Array.isArray(history.entries))return false;
    const previousMax=Math.max(0,...entries.keys()),newIds=new Set();let fresh=0,valid=0;
    for(const e of history.entries){
      if(!e||typeof e!=='object'||!Number.isSafeInteger(e.id)||e.id<1||!Number.isFinite(e.time)||Math.abs(e.time)>8.64e12||!types.has(e.type)||typeof e.text!=='string'||!e.text.trim())continue;
      valid++;
      if(!entries.has(e.id)){cacheDirty=true;entries.set(e.id,{id:e.id,time:e.time,type:e.type,text:e.text.slice(0,280)});newIds.add(e.id);if(e.id>previousMax&&visible(e))fresh++;}
    }
    if(history.entries.length&&!valid)return false;
    hasOlder=hasOlder||!!history.has_older||!!history.has_more||entries.size>LIMIT;
    if(entries.size>LIMIT){const ids=[...entries.keys()].sort((a,b)=>a-b);for(const id of ids.slice(0,entries.size-LIMIT))entries.delete(id);}
    if(loaded&&!fromArchive&&fresh&&(!open||scroller.scrollTop>30)){unread+=fresh;showUnread();}
    if(newIds.size||!loaded)render(loaded&&!fromArchive,newIds);
    return true;
  }
  function saveCache(){
    // Only validated public event fields, never a state/position/private payload.
    if(!entries.size||!cacheDirty)return;
    cacheDirty=false;cachedAt=Date.now();
    try{localStorage.setItem(CACHE,JSON.stringify({version:1,saved_at:cachedAt,has_older:hasOlder,entries:[...entries.values()]}));}catch{}
  }
  function restoreCache(){
    try{
      const raw=localStorage.getItem(CACHE);if(!raw||raw.length>1000000)return;
      const h=JSON.parse(raw);if(h.version!==1||!Number.isFinite(h.saved_at)||h.saved_at<=0)return;
      merge(h,true);cachedAt=h.saved_at;loaded=entries.size>0;cacheDirty=false;
    }catch{} // Storage may be denied, corrupt, full, or disabled. Network still works.
  }
  async function fetchHistory(){
    if(fetching)return;fetching=true;lastFetch=performance.now();retry.disabled=true;
    try{
      const h=await readPublicJson(api+'/api/history');
      if(!merge(h,true))throw Error('invalid-public-history');
      archiveLoaded=true;loaded=true;failed=false;saveCache();render(false);
    }catch{failed=true;render(false);}
    finally{fetching=false;retry.disabled=false;updateLive();}
  }
  function updateLive(){
    const stale=!lastState||performance.now()-lastReceived>35000||lastState.server_time-lastState.heartbeat>60||lastState.resident_status==='stopped';
    panel.classList.toggle('history-offline',stale);
    const cacheLabel=cachedAt?` · сохранено ${clock.format(cachedAt)} мск`:' · записи на устройстве';
    live.textContent=stale?(entries.size?'связи нет':'нет связи с живым сервером'):lastState.resident_status==='sleeping'?'голова спит · дневник открыт':lastState.resident_status==='paused'?'голова отдыхает':'жизнь идёт';
    if(stale&&entries.size)live.textContent+=cacheLabel;
    if(!stale&&failed)live.textContent+=' · архив не дошёл';
    live.title=lastState?.action?.label||'';
  }
  function receive(s){
    const previousMax=Math.max(0,...entries.keys()),tail=Array.isArray(s.history?.entries)?s.history.entries:[];
    lastState=s;lastReceived=performance.now();
    if(merge(s.history)&&entries.size){loaded=true;saveCache();}updateLive();
    // A tab asleep for hours can miss more than one SSE tail.
    const tailIds=tail.filter(e=>e&&Number.isSafeInteger(e.id)).map(e=>e.id);
    const gap=previousMax&&tailIds.length&&Math.min(...tailIds)>previousMax;
    if((gap&&performance.now()-lastFetch>1000)||(!archiveLoaded&&performance.now()-lastFetch>15000))fetchHistory();
  }
  window.addEventListener('beznogim:state',e=>receive(e.detail));
  if(window.__beznogimState)receive(window.__beznogimState);
  restoreCache();render(false);updateLive();
  fetchHistory();
  window.addEventListener('online',()=>{if(failed||!archiveLoaded)fetchHistory();});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&(failed||!archiveLoaded))fetchHistory();});
  setInterval(()=>{updateLive();if(failed||!archiveLoaded)fetchHistory();},15000);
}
