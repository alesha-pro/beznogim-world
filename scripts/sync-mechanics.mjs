import {readFileSync,writeFileSync} from 'node:fs';
const core=readFileSync(new URL('../public/mechanics/cellar.js',import.meta.url),'utf8');
writeFileSync(new URL('../src/cellar-core.js',import.meta.url),'// Generated from public/mechanics/cellar.js by scripts/sync-mechanics.mjs.\n'+core+'\nexport default world;\n');
