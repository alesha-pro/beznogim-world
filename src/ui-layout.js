// Measure the actual translated/wrapped HUD, rather than assume a phone height.
// Read-only layout: no world state, timers, resident tools or API writes.
export function installUILayout() {
  const nav=document.querySelector('.territory-nav');
  const card=document.querySelector('#inspector');
  const footer=document.querySelector('footer');
  const toolbar=document.querySelector('.toolbar');
  let frame=0;
  function measure(){
    frame=0;
    const n=nav.getBoundingClientRect(),f=footer.getBoundingClientRect(),t=toolbar.getBoundingClientRect();
    const landscape=matchMedia('(max-width:900px) and (orientation:landscape) and (max-height:600px)').matches;
    const top=Math.max(12,landscape?0:n.bottom+12,landscape?t.bottom+12:0);
    const bottom=Math.max(64,innerHeight-f.top+12);
    document.documentElement.style.setProperty('--ui-card-top',`${Math.ceil(top)}px`);
    document.documentElement.style.setProperty('--ui-card-bottom',`${Math.ceil(bottom)}px`);
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(measure);}
  const observer=new ResizeObserver(schedule);
  for(const el of [nav,footer,toolbar])observer.observe(el);
  new MutationObserver(schedule).observe(document.body,{attributes:true,attributeFilter:['class']});
  addEventListener('resize',schedule);visualViewport?.addEventListener('resize',schedule);
  schedule();
}
