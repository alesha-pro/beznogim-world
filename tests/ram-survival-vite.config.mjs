// Test-only ESM server: no shared optimizer cache races between replay fixtures.
export default {
 cacheDir: '/tmp/ram-survival-vite-cache',
 optimizeDeps: {noDiscovery:true,include:[],exclude:['three','three/addons/utils/BufferGeometryUtils.js']},
 resolve:{alias:[{find:/^three$/,replacement:'/opt/world-tools/node_modules/three/build/three.module.js'},{find:'three/addons',replacement:'/opt/world-tools/node_modules/three/examples/jsm'}]},
 server:{hmr:false,fs:{allow:['/workspace','/opt/world-tools/node_modules']}}
};
