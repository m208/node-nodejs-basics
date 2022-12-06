import { unzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const decompress = async () => {
    const source = createReadStream(
        path.join(__dirname, 'files', 'archive.gz')
    );

    const destination = createWriteStream(
        path.join(__dirname, 'files', 'fileToCompress.txt')
    );

    source.on('data', (data) => {
        unzip(data, (err, data) => {
            destination.write(data)
        });
    });
};

await decompress();