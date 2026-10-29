import {readFileSync,writeFileSync} from 'node:fs';
const core=readFileSync(new URL('../public/mechanics/cellar.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/cellar-core.js',import.meta.url),'// Generated from public/mechanics/cellar.js by scripts/sync-mechanics.mjs.\n'+core+'\nexport default world;\n');
const amnesty=readFileSync(new URL('../public/mechanics/amnesty.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/amnesty-core.js',import.meta.url),'// Generated from public/mechanics/amnesty.js by scripts/sync-mechanics.mjs.\n'+amnesty+'\nexport default world;\n');
const bench=readFileSync(new URL('../public/mechanics/bench.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/bench-core.js',import.meta.url),'// Generated from public/mechanics/bench.js by scripts/sync-mechanics.mjs.\n'+bench+'\nexport default world;\n');
const drydock=readFileSync(new URL('../public/mechanics/drydock.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/drydock-core.js',import.meta.url),'// Generated from public/mechanics/drydock.js by scripts/sync-mechanics.mjs.\n'+drydock+'\nexport default world;\n');

const dash=readFileSync(new URL('../public/mechanics/dash.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/dash-core.js',import.meta.url),'// Generated from public/mechanics/dash.js by scripts/sync-mechanics.mjs.\n'+dash+'\nexport default world;\n');
const quotes=readFileSync(new URL('../public/mechanics/quotes.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/quotes-core.js',import.meta.url),'// Generated from public/mechanics/quotes.js by scripts/sync-mechanics.mjs.\n'+quotes+'\nexport default world;\n');

const catalog=JSON.parse(readFileSync(new URL('../public/datacenter-catalog.json',import.meta.url),'utf8'));
const garageURL=new URL('../public/mechanics/garage.js',import.meta.url);
const garageSource=readFileSync(garageURL,'utf8').replace(/^const DATACENTER_CATALOG=.*;$/m,()=>'const DATACENTER_CATALOG='+JSON.stringify(catalog)+';');
writeFileSync(garageURL,garageSource);
const garage=readFileSync(new URL('../public/mechanics/garage.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/garage-core.js',import.meta.url),'// Generated from public/mechanics/garage.js by scripts/sync-mechanics.mjs.\n'+garage+'\nexport default world; export {sharingWorld};\n');

const vitals=readFileSync(new URL('../public/mechanics/vitals.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/vitals-core.js',import.meta.url),'// Generated from server mechanics.\n'+vitals+'\nexport default world;\n');
