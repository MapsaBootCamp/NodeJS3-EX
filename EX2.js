const fs = require('fs');
const { Transform } = require("stream");
const CSVtoJSON = new Transform(
    {
        transform(chunk, encoding, callback){
            chunk = JSON.stringify(chunk.toString(), null, 2);
            callback(null, chunk);
        }
    }
)

function transformCSVtoJSON(path){
    if (typeof path !== 'string') throw new Error('path must be of type: string!');
    if (path.slice(-3) !== 'csv') throw new Error('file must be of CSV type!');
    fs.createReadStream(`./${path}`, 'utf8').pipe(CSVtoJSON).pipe(fs.createWriteStream('./output.json', 'utf8'));
}

transformCSVtoJSON('./input.csv');