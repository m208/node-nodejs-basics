import path from 'path';
import {fileURLToPath} from 'url';
import { stat } from 'node:fs';
import { unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    stat(filePath, async (err) => {
        if (err) {
            throw new Error ('FS operation failed');
        } else {
            await unlink(filePath);
        }
    });
    
};

await remove();