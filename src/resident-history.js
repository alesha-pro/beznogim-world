import './resident-history.css';

// A public diary: authored monologues and successful world actions only.
export function createResidentHistory({api,enabled}) {
  if(!enabled)return;
  const LIMIT=600, entries=new Map(), mobile=matchMedia('(max-width: 900px)');
  const clock=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Moscow',hour:'2-digit',minute:'2-digit'});
  const day=new Intl.DateTimeFormat('ru-RU',{timeZone:'Europe/Moscow',day:'numeric',month:'long'});
  const types=new Set(['muse','say','move','interact','wait','cancel','extension','release','cancelled']);
  let filter='all',open=!mobile.matches,loaded=false,fetching=false,hasOlder=false,unread=0,lastState=null,lastReceived=0;
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
  const foot=el('div','history-foot'),live=el('span','history-live','подключаюсь…'),count=el('span','history-count');foot.append(live,count);
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
  toggle.onclick=()=>setOpen(true);close.onclick=()=>setOpen(false);
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
    empty.textContent=loaded?'пока ни строчки. пусть поживёт.':'собираю заметки…';
    count.textContent=hasOlder?`последние ${entries.size} · мск`:`записей: ${entries.size} · мск`;
    if(anchorId){const node=list.querySelector(`[data-event-id="${anchorId}"]`);scroller.scrollTop=oldScroll+(node?node.getBoundingClientRect().top-anchorY:0);}
    else if(!reading)scroller.scrollTop=0;
  }
  function merge(history,fromArchive=false){
    if(!history||!Array.isArray(history.entries))return;
    const previousMax=Math.max(0,...entries.keys()),newIds=new Set();let fresh=0;
    for(const e of history.entries){
      if(!Number.isSafeInteger(e.id)||e.id<1||!Number.isFinite(e.time)||Math.abs(e.time)>8.64e12||!types.has(e.type)||typeof e.text!=='string'||!e.text.trim())continue;
      if(!entries.has(e.id)){entries.set(e.id,{id:e.id,time:e.time,type:e.type,text:e.text.slice(0,280)});newIds.add(e.id);if(e.id>previousMax&&visible(e))fresh++;}
    }
    hasOlder=hasOlder||!!history.has_older||entries.size>LIMIT;
    if(entries.size>LIMIT){const ids=[...entries.keys()].sort((a,b)=>a-b);for(const id of ids.slice(0,entries.size-LIMIT))entries.delete(id);}
    if(loaded&&!fromArchive&&fresh&&(!open||scroller.scrollTop>30)){unread+=fresh;showUnread();}
    if(newIds.size||!loaded)render(loaded&&!fromArchive,newIds);
  }
  async function fetchHistory(){
    if(fetching)return;fetching=true;
    try{const r=await fetch(api+'/api/history',{cache:'no-store',signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error('history');const h=await r.json();merge(h,true);loaded=true;if(!entries.size)render(false);}
    catch{if(!entries.size){empty.textContent='заметки пока не дошли. попробую ещё.';}}
    finally{fetching=false;}
  }
  function updateLive(){
    const stale=!lastState||performance.now()-lastReceived>35000||lastState.server_time-lastState.heartbeat>60||lastState.resident_status==='stopped';
    panel.classList.toggle('history-offline',stale);
    live.textContent=stale?(entries.size?'записи остались · ждём голову':'ждём голову'):lastState.resident_status==='paused'?'голова отдыхает':'жизнь идёт';
    live.title=lastState?.action?.label||'';
  }
  function receive(s){
    const previousMax=Math.max(0,...entries.keys()),tail=s.history?.entries||[];
    lastState=s;lastReceived=performance.now();merge(s.history);updateLive();
    // A tab asleep for hours can miss more than one SSE tail.
    if(previousMax&&tail.length&&tail[0].id>previousMax)fetchHistory();
  }
  window.addEventListener('beznogim:state',e=>receive(e.detail));
  if(window.__beznogimState)receive(window.__beznogimState);
  fetchHistory();setInterval(()=>{updateLive();if(!loaded)fetchHistory();},15000);
}
