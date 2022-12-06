import path from 'path';
import {fileURLToPath} from 'url';
import { stat } from 'node:fs';
import { readdir, copyFile, mkdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const dirPath = path.join(__dirname, 'files');
    const copyPath = path.join(__dirname, 'files_copy');

    stat(dirPath, async (err) => {
        if (err) {
            throw new Error ('FS operation failed');
        }
    });

    stat(copyPath, async (err) => {
        if (err) {
            try {
                const createDir = await mkdir(copyPath, { recursive: true });
              } catch (err) {
                console.error(err.message);
              }
        } else {
            throw new Error ('FS operation failed');
        }
    });

    try {
        const files = await readdir(dirPath);
        for (const file of files){
            await copyFile(path.join(dirPath, file), path.join(copyPath, file));
        }
      } catch (err) {
        console.error(err.message);
      }
};

copy();