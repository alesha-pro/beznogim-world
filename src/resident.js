import {createResidentHistory} from './resident-history.js';
import {readPublicJson} from './public-read.js';
// One shared body, driven by server timestamps. Visitors never receive a write key.
export function createResident({head,headDestination,state,controls,camera,refresh,setAudioTone,say,onHarvest}) {
  let latest=null,received=0,offset=0,connected=false,sandbox=false,follow=false,seenSpeech=0,seenCommit=null,lastRadio=null,lastHarvest=null,lastStatus='',showThoughts=true;
  const thoughtPoint=head.position.clone();
  const bubble=document.createElement('aside');bubble.className='resident-thought';bubble.hidden=true;bubble.setAttribute('aria-label','Мысли Головы');
  const kicker=document.createElement('span');kicker.className='thought-kicker';kicker.textContent='про себя';
  const thoughtText=document.createElement('p');bubble.append(kicker,thoughtText);document.body.append(bubble);
  const enabled=['head.alesha.pro','alesha-pro.github.io','192.168.1.211'].includes(location.hostname);
  const api=location.hostname==='alesha-pro.github.io'?'https://head.alesha.pro':'';
  createResidentHistory({api,enabled});
  const nav=document.querySelector('.territory-nav');
  const strip=document.createElement('div');strip.className='resident-strip';strip.hidden=true;
  const status=document.createElement('span');status.className='resident-status';status.textContent='подключаюсь к голове';
  const vitals=document.createElement('div');vitals.className='resident-vitals';vitals.hidden=true;vitals.setAttribute('aria-label','Самочувствие Головы');
  const needs=[
    {key:'hunger',label:'сытость',color:'#e4b877',icon:'<path d="M12 7c-2.5-2.5-7-1.5-7 3.5S8 20 10.5 19c1-.4 2-.4 3 0C16 20 19 15.5 19 10.5S14.5 4.5 12 7Z"/><path d="M12 7c0-3 2-4 4-4-0 2-1 4-4 4Z"/>'},
    {key:'thirst',label:'вода',color:'#8fced9',icon:'<path d="M12 3C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0C18.5 10.5 15 7 12 3Z"/><path d="M9 14a3 3 0 0 0 3 3"/>'},
    {key:'energy',label:'силы',color:'#d5dc8e',icon:'<path d="m13.5 2-9 12H11l-.5 8 9-12H13l.5-8Z"/>'},
    {key:'mood',label:'настроение',color:'#cbb2d7',icon:'<circle cx="12" cy="12" r="8"/><path d="M8.5 13.5s1 2.5 3.5 2.5 3.5-2.5 3.5-2.5M9 9h.01M15 9h.01"/>'},
  ];
  const meters=needs.map(need=>{
    const card=document.createElement('div');card.className='need-meter';card.dataset.need=need.key;card.style.setProperty('--need-color',need.color);
    card.innerHTML=`<svg class="need-icon" viewBox="0 0 24 24" aria-hidden="true">${need.icon}</svg><div class="need-detail"><div class="need-heading"><b>${need.label}</b><output class="need-value">—</output></div><div class="need-track" role="progressbar" aria-label="${need.label}" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>`;
    vitals.append(card);return {key:need.key,card,value:card.querySelector('.need-value'),bar:card.querySelector('.need-track')};
  });
  const focus=document.createElement('button');focus.type='button';focus.textContent='к голове';focus.onclick=()=>{sandbox=false;follow=true;camera.zoom=innerWidth<700?1.5:1.1;camera.updateProjectionMatrix();updateLabel();};
  const mode=document.createElement('button');mode.type='button';mode.textContent='поиграть самому';mode.onclick=()=>{sandbox=!sandbox;follow=false;updateLabel();};
  const thoughts=document.createElement('button');thoughts.type='button';thoughts.textContent='мысли';thoughts.setAttribute('aria-pressed','true');thoughts.onclick=()=>{showThoughts=!showThoughts;thoughts.setAttribute('aria-pressed',String(showThoughts));};
  strip.append(status,vitals,focus,mode,thoughts);nav.append(strip);
  function now(){return Date.now()/1000+offset;}
  function alive(){return latest&&now()-latest.heartbeat<60&&latest.resident_status!=='stopped';}
  function watching(){return connected&&latest&&!sandbox;}
  function updateVitals(){
    const v=latest?.mechanics?.vitals?.public;
    if(!v){vitals.hidden=true;return;}
    const n=(x)=>Math.max(0,Math.min(100,Math.round(Number(x)||0)));
    vitals.hidden=false;
    for(const meter of meters){const value=n(v[meter.key]);meter.value.textContent=String(value);meter.bar.setAttribute('aria-valuenow',String(value));meter.card.style.setProperty('--need-fill',String(value/100));meter.card.dataset.low=String(value<=20);}
  }
  function updateLabel(){
    const message=sandbox?'ты в песочнице':!connected?'связь с головой прервалась':!alive()?'голова отдыхает · сессия на паузе':latest?.action&&latest.action.ends>now()?latest.action.label:latest?.resident_status==='thinking'?'голова задумалась':'голова здесь';
    if(message!==lastStatus){lastStatus=message;status.textContent=message;}
    mode.textContent=sandbox?'вернуться к голове':'поиграть самому';focus.setAttribute('aria-pressed',String(follow));
  }
  function accept(data){
    if(!data||data.version!==1||!Array.isArray(data.position)||data.position.length!==3||!data.position.every(Number.isFinite)||!data.objects||!Number.isFinite(data.server_time)||!Number.isFinite(data.heartbeat))return;
    // SSE can arrive before a slow GET. Never rewind to that older snapshot.
    if(latest&&(data.server_time<latest.server_time||data.server_time===latest.server_time&&Number.isFinite(data.revision)&&Number.isFinite(latest.revision)&&data.revision<latest.revision))return;
    offset=data.server_time-Date.now()/1000;latest=data;received=performance.now();connected=true;strip.hidden=false;
    if(seenCommit&&data.release?.commit&&seenCommit!==data.release.commit&&location.hostname==='head.alesha.pro'){
      // A new complete static release is already installed on this same server.
      sessionStorage.setItem('beznogim-live-return','1');location.reload();return;
    }
    seenCommit=data.release?.commit||seenCommit;
    const speech=data.speech;if(speech&&speech.time>seenSpeech&&speech.until>now()){seenSpeech=speech.time;if(!sandbox)say(speech.text);}
    window.__beznogimState=data;
    window.dispatchEvent(new CustomEvent('beznogim:state',{detail:data}));
    updateVitals();updateLabel();
  }
  function bodyPosition(){
    const a=latest.action;
    if(a?.kind==='move'){
      const f=Math.max(0,Math.min(1,(now()-a.started)/Math.max(.001,a.ends-a.started)));
      return a.from.map((v,i)=>v+(a.to[i]-v)*f);
    }
    return latest.position;
  }
  function sync(){
    if(!watching())return;
    const o=latest.objects;
    if(o.engine)state.running=!!o.engine.running;
    if(o.workshop)state.roof=o.workshop.roof_open?1:0;
    if(o.radio){state.radio=o.radio.station;if(lastRadio!==state.radio){lastRadio=state.radio;setAudioTone();}}
    if(o.garden){state.harvest=o.garden.harvest;if(lastHarvest!==null&&state.harvest>lastHarvest)onHarvest();lastHarvest=state.harvest;}
    const a=latest.action;state.brew=a?.effect==='brew'?Math.max(0,a.ends-now()):0;
    state.loop=0;updateLabel();
  }
  function place(){
    if(!watching()){bubble.hidden=true;return;}
    const p=bodyPosition();head.position.set(p[0],p[1]+Math.sin(now()*1.4)*.1,p[2]);headDestination.set(...p);
    if(follow){controls.target.lerp(head.position,.08);}
    const m=latest.musing;
    if(showThoughts&&alive()&&m?.text&&m.until>now()&&!document.body.classList.contains('dreaming')&&!document.querySelector('#speech.visible')){
      if(thoughtText.textContent!==m.text)thoughtText.textContent=m.text;
      thoughtPoint.copy(head.position);thoughtPoint.y+=1.8;thoughtPoint.project(camera);
      if(thoughtPoint.z>=-1&&thoughtPoint.z<=1&&Math.abs(thoughtPoint.x)<1&&Math.abs(thoughtPoint.y)<1){
        bubble.hidden=false;
        const w=bubble.offsetWidth,h=bubble.offsetHeight;
        const x=Math.max(w/2+12,Math.min(innerWidth-w/2-12,(thoughtPoint.x+1)*innerWidth/2));
        let y=(1-thoughtPoint.y)*innerHeight/2-18;
        const navRect=nav.getBoundingClientRect();
        const topFloor=x-w/2<navRect.right&&x+w/2>navRect.left?navRect.bottom+12:18;
        const below=y-h<topFloor;
        if(below)y=Math.max(topFloor+h,(1-thoughtPoint.y)*innerHeight/2+70+h);
        y=Math.min(innerHeight-70,Math.max(h+18,y));
        bubble.classList.toggle('below-head',below);
        bubble.style.transform=`translate3d(${Math.round(x)}px,${Math.round(y)}px,0) translate(-50%,-100%)`;
      }else bubble.hidden=true;
    }else bubble.hidden=true;
  }
  function localPlay(){if(watching()){sandbox=true;follow=false;updateLabel();}}
  function start(){
    if(!enabled)return;
    strip.hidden=false;
    let fetching=false;
    async function refreshState(){
      if(fetching)return;fetching=true;
      try{
        const data=await readPublicJson(api+'/api/state');accept(data);
        // Polling/retry must not close a card the visitor already opened.
        if(latest&&!state.selected)document.querySelector('#inspector').classList.add('collapsed');
      }catch{
        // A failed polling request must not disconnect a healthy SSE snapshot.
        if(!latest||performance.now()-received>35000)connected=false;
        updateLabel();
      }finally{fetching=false;}
    }
    // Start SSE independently: a stalled initial GET must never block it.
    try{
      const events=new EventSource(api+'/api/events');
      events.addEventListener('state',e=>{try{accept(JSON.parse(e.data));}catch{}});
      events.onerror=()=>{connected=false;updateLabel();};
    }catch{connected=false;updateLabel();}
    refreshState();
    function retry(){if(!connected||!latest||performance.now()-received>30000)refreshState();}
    window.addEventListener('online',retry);
    window.addEventListener('beznogim:retry',refreshState);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)retry();});
    setInterval(()=>{
      if(latest&&performance.now()-received>35000)connected=false;
      updateLabel();retry();
    },15000);
  }
  controls.addEventListener('start',()=>{follow=false;updateLabel();});
  start();
  return {sync,place,localPlay,unfollow:()=>{follow=false;},watching,inspect:()=>({connected,sandbox,follow,alive:!!alive(),revision:latest?.revision,release:latest?.release?.commit,action:latest?.action,musing:latest?.musing,thoughtVisible:!bubble.hidden,position:latest?bodyPosition():null})};
}
