import { fork } from 'child_process'

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const script = path.join(__dirname, 'files', 'script.js');

 export const spawnChildProcess = async (args) => {
    fork(script, args);
 }

const args = ['a', 'b', 'c'];

spawnChildProcess(args);