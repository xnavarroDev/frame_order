import {readdirSync} from 'node:fs';

const dir = process.argv[2] ?? '/frames';
const frames = readdirSync(dir).filter(name => name.endsWith('.png')).sort();
for (const name of frames.reverse()) {
  console.log(name);
}
