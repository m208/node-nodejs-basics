import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join('').slice(1) + '\n');
        },
      });

    stdin.pipe(reverse).pipe(stdout);
};

await transform();