import { createGzip  } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const source = createReadStream(
        path.join(__dirname, 'files', 'fileToCompress.txt')
    );
    const destination = createWriteStream(
        path.join(__dirname, 'files', 'archive.gz')
    );

    const gzip = createGzip();
    source.pipe(gzip).pipe(destination);
};

await compress();

