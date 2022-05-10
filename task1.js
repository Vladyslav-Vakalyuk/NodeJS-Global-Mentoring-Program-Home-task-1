import { createInterface } from 'readline';
import { reversString } from './reversString.js';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = value => {
    console.log('log: ' + value);
    return value;
}
rl.on('line', compose(reversString, trace));
