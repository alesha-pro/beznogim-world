// Local media only. No resident state, network writes, shared controls or autoplay.
export function validTracks(rows) {
  return (Array.isArray(rows) ? rows : []).filter(t =>
    t && typeof t.id==='string' && typeof t.title==='string' && t.title.trim() &&
    typeof t.file==='string' && /^music\/[a-z0-9_-]+\.(mp3|ogg|wav|m4a)$/.test(t.file)
  ).map(t=>({id:t.id,title:t.title,file:t.file}));
}
export function createRadioPlayer({audio,tracks=[],base='./',volume=.5,onChange=()=>{}}) {
  tracks=validTracks(tracks);
  let index=0,wanted=false,loaded=-1,serial=0,error='',pending=false;
  audio.preload='none'; audio.autoplay=false; audio.loop=false;
  audio.volume=Math.min(1,Math.max(0,Number.isFinite(volume)?volume:.5));
  const inspect=()=>({tracks,index,track:tracks[index]||null,playing:!audio.paused&&!audio.ended,wanted,pending,error,volume:audio.volume,time:Number.isFinite(audio.currentTime)?audio.currentTime:0,duration:Number.isFinite(audio.duration)?audio.duration:0});
  const emit=()=>onChange(inspect());
  function load(){if(loaded===index)return;audio.src=base+tracks[index].file;loaded=index;audio.load();}
  function fail(message){serial++;wanted=false;pending=false;loaded=-1;audio.pause();error=message;emit();}
  async function play(){
    if(!tracks.length)return;
    const call=++serial;wanted=true;pending=true;error='';load();emit();
    try{await audio.play();if(call!==serial){if(!wanted)audio.pause();return;}pending=false;emit();}
    catch(e){if(call!==serial)return;fail(e?.name==='NotAllowedError'?'Браузер остановил звук. Нажми «играть» ещё раз.':'Не удалось воспроизвести трек. Повтори или выбери следующий.');}
  }
  function pause(){serial++;wanted=false;pending=false;audio.pause();emit();}
  function move(delta){if(!tracks.length)return;const resume=wanted;serial++;audio.pause();pending=false;index=(index+delta+tracks.length)%tracks.length;error='';loaded=-1;load();if(resume)void play();else emit();}
  audio.addEventListener('ended',()=>{if(wanted)move(1);else emit();});
  audio.addEventListener('error',()=>{if(audio.error)fail('Файл недоступен или повреждён. Повтори или выбери следующий.');});
  audio.addEventListener('pause',()=>{if(audio.paused&&!audio.ended&&!pending)wanted=false;emit();});
  for(const name of ['playing','timeupdate','loadedmetadata','volumechange','waiting'])audio.addEventListener(name,emit);
  emit();
  return {inspect,play,pause,toggle:()=>wanted?pause():play(),next:()=>move(1),previous:()=>move(-1),setVolume(v){if(!Number.isFinite(v))return;audio.volume=Math.max(0,Math.min(1,v));emit();}};
}
