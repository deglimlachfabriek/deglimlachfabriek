#!/usr/bin/env node import fs from 'fs/promises';

const OUT_PATH = './_data/daily.json';

const FALLBACKS = [ { title: 'Hoopvolle start', message: 'Kies vandaag één klein ding dat je wél kunt doen — die ene stap telt.' }, { title: 'Verbinding', message: 'Een kort bericht aan een vriend kan iemands dag veranderen.' }, { title: 'Adem', message: 'Adem driemaal diep in; voel de spanning zachtjes wegsmelten.' }, { title: 'Kleine gewoonten', message: 'Kleine gewoonten stapelen zich op tot grote veranderingen.' }, { title: 'Dankbaarheid', message: 'Schrijf één ding op waar je dankbaar voor bent.' }, { title: 'Leren', message: 'Elke dag een klein nieuw ding leren houdt de geest fris.' }, { title: 'Rust', message: 'Rust is productief: geef jezelf toestemming om niets te doen.' } ];

async function main(){ const idx = new Date().getDate() % FALLBACKS.length; const out = { ...FALLBACKS[idx], date: new Date().toISOString().slice(0,10), language: 'nl' }; await fs.mkdir('./_data', { recursive: true }); await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8'); console.log('Wrote fallback daily inspiration:', OUT_PATH); }

main().catch(e => { console.error(e); process.exit(1); }); 
