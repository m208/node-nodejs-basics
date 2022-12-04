import { Worker } from 'worker_threads';
import { cpus } from "os";

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const script = path.join(__dirname, 'worker.js');

const createWorker = (data) => {
    return new Promise((resolve, reject)=> {
        const worker = new Worker(script, { workerData: data });

        worker.on('message', (result) => {
           resolve({
                status: 'resolved',
                data: result,
            });
        });

        worker.on('error', () => {
            reject({
                status: 'error',
                data: null,
            });
        });
    });
}

const performCalculations = () => {
    const startPos = 10;
    const cpuCores = cpus();
    const workers = [];

    cpuCores.forEach((c, i) => {
        workers.push(createWorker(startPos + i));
    });

    Promise.allSettled(workers).then((results) => 
        results.forEach(res=>{
            console.log(res.value || res.reason);
        })
    );
}

performCalculations();


