import { createWriteStream, stat } from "fs";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', "fresh.txt");

    stat(filePath, (err) => {
        if (err) {
            const stream = createWriteStream(filePath);
            stream.write('I am fresh and young');
        } else {
            throw new Error ('FS operation failed');
        }
      });
};

await create();