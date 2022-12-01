import path from 'path';
import {fileURLToPath} from 'url';
import { stat } from 'node:fs';
import { copyFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFile = path.join(__dirname, 'files', 'properFilename.md');

    stat(wrongFile, async (err) => {
        if (err) {
            throw new Error ('FS operation failed');
        }
    });

    stat(properFile, async (err) => {
        if (!err) {
            throw new Error ('FS operation failed');
        } 
    });

    await copyFile(wrongFile, properFile);
};

await rename();