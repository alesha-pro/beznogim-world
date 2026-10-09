import * as THREE from 'three';

// Small, local DOM islands. Moving an anchor must not relayout or repaint the yard.
// Viewport sizes arrive from resize, never from layout getters between style writes.
export function createProjectedMarkers({entries, elements, layer, camera}) {
  const projection=new THREE.Matrix4(),previous=new THREE.Matrix4();
  const point=new THREE.Vector3();
  const records=Object.entries(entries).map(([id,e])=>({
    element:elements[id],anchor:e.point,x:NaN,y:NaN,visible:null
  }));
  let width=0,height=0,wasEnabled=false;
  return {
    update(enabled,w,h) {
      if(layer.hidden===enabled)layer.hidden=!enabled;
      if(!enabled){wasEnabled=false;return;}
      projection.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
      const moved=!wasEnabled||width!==w||height!==h||!projection.equals(previous);
      width=w;height=h;wasEnabled=true;
      for(const record of records){
        if(typeof record.anchor==='function')record.anchor(point);
        else {if(!moved)continue;point.copy(record.anchor);}
        point.applyMatrix4(projection);
        const x=(point.x+1)*w*.5,y=(1-point.y)*h*.5;
        const visible=point.z>=-1&&point.z<=1&&x>=10&&x<=w-10&&y>=10&&y<=h-55;
        if(visible!==record.visible){record.visible=visible;record.element.classList.toggle('hidden',!visible);}
        if(!visible)continue;
        // Subpixel precision without a new style string for imperceptible settling.
        const px=Math.round(x*10)/10,py=Math.round(y*10)/10;
        if(px!==record.x||py!==record.y){record.x=px;record.y=py;record.element.style.transform=`translate3d(${px}px,${py}px,0) translate(-50%,-50%)`;}
      }
      previous.copy(projection);
    }
  };
}
