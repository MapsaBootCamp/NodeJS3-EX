const fs = require('fs');

function readAndWriteUsingStream(path){
    if (typeof path !== 'string') throw new Error('path should be of type: string!');
    fs.createReadStream(`./${path}`, 'utf8').pipe(fs.createWriteStream('./output.txt', 'utf8'));
}

readAndWriteUsingStream('./Note.txt');