import {sharingWorld} from './garage-core.js';
// Visitor actions only touch this local, separate simulation. No public write endpoint.
export function createComputeSharing({ui,makeLights}){
 const key='beznogim-mike-sharing-sandbox-v1';let saved=null;try{const v=JSON.parse(localStorage.getItem(key));if(v&&v.v===1&&typeof v.enabled==='boolean'&&Number.isInteger(v.seq)&&v.seq>=0&&Number.isInteger(v.completed)&&v.completed>=0&&Number.isInteger(v.cancelled)&&v.cancelled>=0&&Number.isFinite(v.last)&&Array.isArray(v.queue)&&v.queue.length<=3&&Array.isArray(v.receipts)&&v.receipts.length<=12&&[v.active,...v.queue,...v.receipts].filter(Boolean).every(j=>Number.isInteger(j.ticket)&&['sort','route','checksum'].includes(j.task)&&[1,2,3].includes(j.batch)&&Number.isFinite(j.duration)&&(!j.ends||Number.isFinite(j.ends))))saved=v;}catch{}
 let local;try{local=sharingWorld({mode:'migrate',state:saved,now:Date.now()/1000});}catch{local=sharingWorld({mode:'migrate',now:Date.now()/1000});}
 let lastReceipts='';
 let live=window.__beznogimState?.mechanics?.garage?.public?.sharing||null,sandbox=!live,lastRender='',lastTick=0,message='';
 const node=document.createElement('section');node.id='compute-sharing';node.innerHTML=`<div class="compute-heading"><strong>виртуальный sharing · Mike</strong><button id="compute-mode"></button></div><p id="compute-status"></p><div class="compute-buttons"><button id="compute-permission"></button><select id="compute-task" aria-label="виртуальная задача"><option value="sort">сортировка</option><option value="checksum">контрольная сумма</option><option value="route">маршрут пакетов</option></select><select id="compute-batch" aria-label="размер задачи"><option value="1">×1 · 60с</option><option value="2">×2 · 120с</option><option value="3">×3 · 180с</option></select><button id="compute-submit">отправить</button></div><p id="compute-message" role="status"></p><details id="compute-results"><summary>сохранённые результаты <span></span></summary><div id="compute-receipts"></div></details><small>Игровой расчёт, не ответ модели. Нет DPC, реального инференса или подключения к компьютеру. Отзыв sharing отменяет незавершённое. Последние 12 квитанций; старые номера не повторяются.</small>`;
 ui.querySelector('.dc-tabs').after(node);const $=s=>node.querySelector(s),lights=makeLights();
 const current=()=>sandbox?local.public:live;
 function store(){try{localStorage.setItem(key,JSON.stringify(local.state));}catch{}}
 function call(args){if(!sandbox)return;local=sharingWorld({mode:'action',tool:'pump',args,state:local.state,now:Date.now()/1000,world:{position:[50.5,.6,-35]}});message=local.result?.ok?'локальная симуляция: принято':local.result?.reason||'';store();render();}
 $('#compute-mode').onclick=()=>{if(!live)return;sandbox=!sandbox;message='';render();};
 $('#compute-permission').onclick=()=>call({sharing:current().enabled?'disable':'enable'});
 $('#compute-submit').onclick=()=>call({sharing:'submit',task:$('#compute-task').value,batch:Number($('#compute-batch').value),ticket:current().nextTicket});
 function render(){const d=current();if(!d)return;const {last,...visible}=d;const stamp=JSON.stringify([{...visible,active:d.active?{...d.active,progress:Math.round(d.active.progress*100)}:null},sandbox,message]);if(lastRender===stamp)return;lastRender=stamp;
  $('#compute-mode').textContent=sandbox?'смотреть жителя':'своя песочница';$('#compute-mode').disabled=!live;
  const phase=d.active?`#${d.active.ticket} ${d.active.task} · занят ${Math.round(d.active.progress*100)}%`:'свободен';
  $('#compute-status').textContent=`${sandbox?'СВОЯ ПЕСОЧНИЦА':'ЖИТЕЛЬ · только просмотр'} · sharing ${d.enabled?'включён':'выключен'}\n${phase} · очередь ${d.queue.length}/3 · завершено ${d.completed}${d.queue.length?'\nждут: '+d.queue.map(j=>'#'+j.ticket+' '+j.task).join(', '):''}`;
  $('#compute-permission').textContent=d.enabled?'отозвать sharing':'разрешить sharing';$('#compute-permission').disabled=!sandbox;
  $('#compute-submit').disabled=!sandbox||!d.enabled||d.queue.length>=3;$('#compute-task').disabled=$('#compute-batch').disabled=!sandbox;
  $('#compute-message').textContent=message||(!sandbox?'Общее состояние меняет только житель. Кнопка выше открывает отдельную местную игру.':'Твои кнопки не меняют общую жизнь жителя.');
  $('#compute-results summary span').textContent=`(${d.receipts.length})`;
  const receiptStamp=JSON.stringify(d.receipts);if(receiptStamp!==lastReceipts){lastReceipts=receiptStamp;const list=$('#compute-receipts');list.replaceChildren();for(const j of [...d.receipts].reverse()){const row=document.createElement('p');row.textContent=`#${j.ticket} · ${j.task} ×${j.batch} · ${j.status==='done'?'готово':'отменено'}`;if(j.simulation){const pre=document.createElement('code');pre.textContent=JSON.stringify(j.simulation);row.append(document.createElement('br'),pre);}list.append(row);}}
  lights.show(d);
 }
 window.addEventListener('beznogim:state',e=>{const d=e.detail?.mechanics?.garage?.public?.sharing;if(d){const first=!live;live=d;if(first)sandbox=false;render();}});
 function update(){if(sandbox&&Date.now()-lastTick>500){lastTick=Date.now();local=sharingWorld({mode:'tick',state:local.state,now:Date.now()/1000});store();render();}lights.animate(current());}
 render();return {update,show:tab=>{node.hidden=tab==='alexey';},inspect:()=>({sandbox,live,current:current(),lightState:lights.inspect()})};
}
