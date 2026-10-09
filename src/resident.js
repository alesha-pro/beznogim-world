// One shared body, driven by server timestamps. Visitors never receive a write key.
export function createResident({head,headDestination,state,controls,camera,refresh,setAudioTone,say,onHarvest}) {
  let latest=null,received=0,offset=0,connected=false,sandbox=false,follow=false,seenSpeech=0,seenCommit=null,lastRadio=null,lastHarvest=null,lastStatus='',showThoughts=true;
  const thoughtPoint=head.position.clone();
  const bubble=document.createElement('aside');bubble.className='resident-thought';bubble.hidden=true;bubble.setAttribute('aria-label','Мысли Головы');
  const kicker=document.createElement('span');kicker.className='thought-kicker';kicker.textContent='про себя';
  const thoughtText=document.createElement('p');bubble.append(kicker,thoughtText);document.body.append(bubble);
  const enabled=['head.alesha.pro','alesha-pro.github.io','192.168.1.211'].includes(location.hostname);
  const api=location.hostname==='alesha-pro.github.io'?'https://head.alesha.pro':'';
  const nav=document.querySelector('.territory-nav');
  const strip=document.createElement('div');strip.className='resident-strip';strip.hidden=true;
  const status=document.createElement('span');status.className='resident-status';status.textContent='подключаюсь к голове';
  const focus=document.createElement('button');focus.type='button';focus.textContent='к голове';focus.onclick=()=>{sandbox=false;follow=true;camera.zoom=innerWidth<700?1.5:1.1;camera.updateProjectionMatrix();updateLabel();};
  const mode=document.createElement('button');mode.type='button';mode.textContent='поиграть самому';mode.onclick=()=>{sandbox=!sandbox;follow=false;updateLabel();};
  const thoughts=document.createElement('button');thoughts.type='button';thoughts.textContent='мысли';thoughts.setAttribute('aria-pressed','true');thoughts.onclick=()=>{showThoughts=!showThoughts;thoughts.setAttribute('aria-pressed',String(showThoughts));};
  strip.append(status,focus,mode,thoughts);nav.append(strip);
  function now(){return Date.now()/1000+offset;}
  function alive(){return latest&&now()-latest.heartbeat<60&&latest.resident_status!=='stopped';}
  function watching(){return connected&&latest&&!sandbox;}
  function updateLabel(){
    const message=sandbox?'ты в песочнице':!connected?'связь с головой прервалась':!alive()?'голова отдыхает · сессия на паузе':latest?.action&&latest.action.ends>now()?latest.action.label:latest?.resident_status==='thinking'?'голова задумалась':'голова здесь';
    if(message!==lastStatus){lastStatus=message;status.textContent=message;}
    mode.textContent=sandbox?'вернуться к голове':'поиграть самому';focus.setAttribute('aria-pressed',String(follow));
  }
  function accept(data){
    if(!data||data.version!==1||!Array.isArray(data.position)||!data.objects)return;
    offset=data.server_time-Date.now()/1000;latest=data;received=performance.now();connected=true;strip.hidden=false;
    if(seenCommit&&data.release?.commit&&seenCommit!==data.release.commit&&location.hostname==='head.alesha.pro'){
      // A new complete static release is already installed on this same server.
      sessionStorage.setItem('beznogim-live-return','1');location.reload();return;
    }
    seenCommit=data.release?.commit||seenCommit;
    const speech=data.speech;if(speech&&speech.time>seenSpeech&&speech.until>now()){seenSpeech=speech.time;if(!sandbox)say(speech.text);}
    updateLabel();
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
  async function start(){
    if(!enabled)return;
    strip.hidden=false;
    try{
      const response=await fetch(api+'/api/state',{cache:'no-store'});if(!response.ok)throw Error('offline');
      accept(await response.json());document.querySelector('#inspector').classList.add('collapsed');
    }catch{connected=false;updateLabel();}
    const events=new EventSource(api+'/api/events');
    events.addEventListener('state',e=>{try{accept(JSON.parse(e.data));}catch{}});
    events.onerror=()=>{connected=false;updateLabel();};
    setInterval(()=>{if(latest&&performance.now()-received>35000)connected=false;updateLabel();},5000);
  }
  controls.addEventListener('start',()=>{follow=false;updateLabel();});
  start();
  return {sync,place,localPlay,unfollow:()=>{follow=false;},watching,inspect:()=>({connected,sandbox,follow,alive:!!alive(),revision:latest?.revision,release:latest?.release?.commit,action:latest?.action,musing:latest?.musing,thoughtVisible:!bubble.hidden,position:latest?bodyPosition():null})};
}
