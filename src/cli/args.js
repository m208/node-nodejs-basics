import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const parseArgs = () => {
    console.log('Input your text: ');

    rl.on('line', answer => {
        rl.clearLine()
        const arr = answer.split(' ')
        
        if (arr[0].includes('--') && arr[1]){
            console.log(`${arr[0].replace('--', '')} is ${arr[1]}`)
        } 
    });
};

parseArgs();