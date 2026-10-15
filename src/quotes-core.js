// Generated from public/mechanics/quotes.js by scripts/sync-mechanics.mjs.
// Fictional sliding nursery. Board cells: x=cell%5, z=floor(cell/5); north is -z.
const QUOTE_LEVELS=[
{"rocks": [2, 6, 13, 15], "start": [20, 24], "goals": [1, 3]},
{"rocks": [0, 4, 7, 9, 16], "start": [20, 24], "goals": [1, 3]},
{"rocks": [2, 4, 5, 14, 15, 19], "start": [20, 24], "goals": [1, 3]}
];
function world(input){
 const o=input.state||{},num=(v,l,h,f)=>Number.isFinite(v)?Math.max(l,Math.min(h,Math.floor(v))):f;
 const planted=num(o.planted,0,3,0),level=Math.min(2,planted),board=QUOTE_LEVELS[level];
 let positions=Array.isArray(o.positions)&&o.positions.length===2?o.positions.slice():board.start.slice();
 if(positions.some(v=>!Number.isInteger(v)||v<0||v>24||board.rocks.includes(v))||positions[0]===positions[1])positions=board.start.slice();
 const s={run:num(o.run,1,999999,1),planted,positions,moves:num(o.moves,0,99999,0),message:typeof o.message==='string'?o.message.slice(0,220):'Две ёлочки на льду. Доведи « и » до своих светлых проёмов.'};
 let result=null;
 if(input.mode==='action'){
  const a=input.args||{};
  if(input.tool==='restart'&&a.scope==='pair'){s.positions=board.start.slice();s.message='Эта пара вернулась на старт. Посаженные ели остались.';result={ok:true};}
  else if(input.tool==='restart'&&a.scope!==undefined&&a.scope!=='all')result={ok:false,reason:'invalid_arguments'};
  else if(input.tool==='restart'){Object.assign(s,{run:Math.min(999999,s.run+1),planted:0,positions:QUOTE_LEVELS[0].start.slice(),moves:0,message:'Снова две кавычки. Лёд скользкий, камни остаются на месте.'});result={ok:true};}
  else if(!['slide','plant'].includes(input.tool))result={ok:false,reason:'unknown_tool'};
  else if(s.planted===3)result={ok:false,reason:'complete'};
  else if(input.tool==='slide'){
   const dirs={north:[0,-1],east:[1,0],south:[0,1],west:[-1,0]};
   if(![0,1].includes(a.piece)||!Object.hasOwn(dirs,a.direction))result={ok:false,reason:'invalid_arguments'};
   else{const [dx,dz]=dirs[a.direction],from=s.positions[a.piece];let x=from%5,z=Math.floor(from/5);
    while(x+dx>=0&&x+dx<5&&z+dz>=0&&z+dz<5&&!board.rocks.includes((z+dz)*5+x+dx)&&(z+dz)*5+x+dx!==s.positions[1-a.piece]){x+=dx;z+=dz;}
    const to=z*5+x;s.positions[a.piece]=to;
    if(to!==from){s.moves=Math.min(99999,s.moves+1);s.message='Скользит до упора. Другая кавычка тоже может быть упором.';}else s.message='Упёрлась. Можно сдвинуть другую кавычку.';
    result={ok:to!==from,from,to,reason:to===from?'blocked':'slid'};
   }
  }else{
   if(s.positions.some((v,i)=>v!==board.goals[i])){s.message='Не пролезли. Обе кавычки должны стоять в своих проёмах: « слева, » справа.';result={ok:false,reason:'not_aligned'};}
   else{s.planted++;s.positions=QUOTE_LEVELS[Math.min(2,s.planted)].start.slice();s.message=s.planted===3?'Шесть ёлок за воротами. Опять пролезли.':'Пара пролезла и укоренилась. На льду другая расстановка камней.';result={ok:true,trees:s.planted*2};}
  }
 }
 const b=QUOTE_LEVELS[Math.min(2,s.planted)];
 return {state:s,public:{...s,level:Math.min(3,s.planted+1),phase:s.planted===3?'complete':'sliding',trees:s.planted*2,rocks:b.rocks,goals:b.goals,size:5},result,seconds:input.tool==='plant'?40:15,label:input.tool==='plant'?'выпускает кавычки в питомник':'двигает ёлочки по льду'};
}

export default world;
