import { createReadStream, stat } from "fs";
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', "fileToRead.txt");

    stat(filePath, async (err) => {
        if (err) {
            throw new Error ('FS operation failed');
        }
    });

    const stream = createReadStream(filePath, 'utf-8');
    stream.on('data', (data) => console.log(data));
};

await read();