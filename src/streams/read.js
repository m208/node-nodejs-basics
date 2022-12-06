import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const stream = createReadStream(
        path.join(__dirname, 'files', 'fileToRead.txt')
    );

    stream.pipe(stdout);
};

await read();