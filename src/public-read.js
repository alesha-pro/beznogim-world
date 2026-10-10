// Read-only resident transport. Timer also covers a stalled response body.
// No AbortSignal.timeout: several mobile browsers do not implement it.
export async function readPublicJson(url, milliseconds=12000) {
  const controller=typeof AbortController==='function'?new AbortController():null;
  let timer;
  const deadline=new Promise((_,reject)=>{timer=setTimeout(()=>{
    const error=new Error('public-read-timeout');error.code='timeout';
    reject(error);controller?.abort();
  },milliseconds);});
  try {
    return await Promise.race([deadline,(async()=>{
      const response=await fetch(url,{cache:'no-store',...(controller?{signal:controller.signal}:{})});
      if(!response.ok){const error=new Error('public-read-http');error.code='http';throw error;}
      return await response.json();
    })()]);
  } finally {clearTimeout(timer);}
}
