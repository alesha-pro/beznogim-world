import {readFileSync,writeFileSync} from 'node:fs';
const core=readFileSync(new URL('../public/mechanics/cellar.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/cellar-core.js',import.meta.url),'// Generated from public/mechanics/cellar.js by scripts/sync-mechanics.mjs.\n'+core+'\nexport default world;\n');
const amnesty=readFileSync(new URL('../public/mechanics/amnesty.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/amnesty-core.js',import.meta.url),'// Generated from public/mechanics/amnesty.js by scripts/sync-mechanics.mjs.\n'+amnesty+'\nexport default world;\n');
const bench=readFileSync(new URL('../public/mechanics/bench.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/bench-core.js',import.meta.url),'// Generated from public/mechanics/bench.js by scripts/sync-mechanics.mjs.\n'+bench+'\nexport default world;\n');
