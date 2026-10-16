#!/usr/bin/env node

import fs from 'fs/promises';

const OUT_PATH = './_data/daily.json';

const FALLBACKS = [
  {
    title: 'Hoopvolle start',
    message: 'Kies vandaag één klein ding dat je wél kunt doen.'
  },
  {
    title: 'Verbinding',
    message: 'Een kort bericht aan een vriend kan iemands dag veranderen.'
  },
  {
    title: 'Adem',
    message: 'Adem driemaal diep in en geef jezelf rust.'
  }
];

async function main() {
  const idx = new Date().getDate() % FALLBACKS.length;

  const out = {
    ...FALLBACKS[idx],
    date: new Date().toISOString().slice(0, 10),
    language: 'nl'
  };

  await fs.mkdir('./_data', { recursive: true });

  await fs.writeFile(
    OUT_PATH,
    JSON.stringify(out, null, 2),
    'utf8'
  );

  console.log('daily.json bijgewerkt');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
