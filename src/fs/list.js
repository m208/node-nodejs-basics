import path from 'path';
import {fileURLToPath} from 'url';
import { stat } from 'node:fs';
import { readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.join(__dirname, 'files');

    stat(dirPath, async (err) => {
        if (err) {
            throw new Error ('FS operation failed');
        }
    });

    try {
        const files = await readdir(dirPath);
        for (const file of files){
            console.log(file);
        }
      } catch (err) {
        console.error(err.message);
      }
};

await list();