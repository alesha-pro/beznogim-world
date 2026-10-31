import playlist from '../public/music/playlist.json';
import {createRadioPlayer} from './radio-player-core.js';
import './radio-player.css';
export function installRadioPlayer(){
  const controls=document.createElement('section');controls.id='radio-player';controls.hidden=true;controls.setAttribute('aria-label','Музыка двора');
  controls.innerHTML=`<div class="radio-label">КАССЕТЫ ГОЛОВЫ <span>только у тебя</span></div>
    <p id="radio-track"></p><div class="radio-buttons"><button id="radio-prev" aria-label="Предыдущий трек">⏮</button><button id="radio-play">играть</button><button id="radio-next" aria-label="Следующий трек">⏭</button></div>
    <div class="radio-volume"><label for="radio-volume">громкость</label><input id="radio-volume" type="range" min="0" max="1" step="0.01"><output id="radio-volume-value" for="radio-volume"></output></div>
    <div class="radio-progress" id="radio-progress"></div><p id="radio-message" role="status" aria-live="polite"></p>`;
  document.querySelector('#object-action').before(controls);
  const mini=document.createElement('button');mini.id='radio-mini';mini.hidden=true;mini.setAttribute('aria-label','Поставить музыку на паузу');document.body.append(mini);
  const audio=document.createElement('audio');audio.id='yard-radio-audio';audio.hidden=true;audio.preload='none';document.body.append(audio);
  let stored=.5;try{const s=localStorage.getItem('beznogim-radio-volume');if(s!==null&&Number.isFinite(Number(s)))stored=Number(s);}catch{}
  const time=t=>`${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  const q=s=>controls.querySelector(s);
  const player=createRadioPlayer({audio,tracks:playlist.tracks,base:import.meta.env.BASE_URL,volume:stored,onChange:s=>{
    controls.classList.toggle('radio-empty',!s.tracks.length);
    q('#radio-track').textContent=s.track?`${s.index+1} / ${s.tracks.length} · ${s.track.title}`:'кассеты ещё в пути';
    q('#radio-play').textContent=s.wanted?'пауза':s.error?'повторить':'играть';
    for(const id of ['#radio-play','#radio-prev','#radio-next','#radio-volume'])q(id).disabled=!s.tracks.length;
    q('#radio-volume').value=s.volume;q('#radio-volume-value').textContent=Math.round(s.volume*100)+'%';
    q('#radio-progress').textContent=s.track?`${time(s.time)} / ${s.duration?time(s.duration):'—:—'}`:'';
    q('#radio-message').textContent=!s.tracks.length?'Исходные записи пока недоступны. Музыку не подменяю. Шумовые станции и сны доступны здесь же.':s.error||(s.pending?'загружаю трек…':'Без автозапуска. Пауза, трек и громкость не меняют радио жителя.');
    mini.hidden=!s.wanted;mini.textContent=`Ⅱ ${s.track?.title||'радио'}`;
  }});
  q('#radio-play').onclick=()=>void player.toggle();q('#radio-prev').onclick=player.previous;q('#radio-next').onclick=player.next;
  q('#radio-volume').oninput=e=>{player.setVolume(Number(e.target.value));try{localStorage.setItem('beznogim-radio-volume',String(player.inspect().volume));}catch{}};
  mini.onclick=player.pause;
  return {controls,inspect:player.inspect};
}
