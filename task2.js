const csvFilePath = 'nodejs-hw1-ex1.csv';
import csv from 'csvtojson';
import { createWriteStream, createReadStream } from 'fs';
const readStream = createReadStream(csvFilePath);
const writeStream = createWriteStream('example.txt');

readStream.on('error', (e) => console.log(e))
    .pipe(csv().on('error', (e) => console.log(e)))
    .pipe(writeStream.on('error', (e) => console.log(e)));