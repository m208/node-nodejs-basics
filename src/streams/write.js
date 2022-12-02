import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const stream = createWriteStream(
        path.join(__dirname, 'files', 'fileToWrite.txt')
    );

    stdin.on('data', (data) => {
        stream.write(data);
    });

    process.on('SIGINT', () => {
        stream.end();
        process.exit();
    });
};

await write();