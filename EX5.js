const fs = require('fs');

function concatenator(file1, file2, file3){
    if (typeof file1 !== 'string' || typeof file2 !== 'string' || typeof file3 !== 'string') throw new Error('bad file path');

    let s1 = fs.createReadStream(`./${file1}`);
    let s2 = fs.createReadStream(`./${file2}`);
    let s3 = fs.createReadStream(`./${file3}`);
    let output = fs.createWriteStream('./concatenated.txt');

    s1.pipe(output);
    s2.pipe(output);
    s3.pipe(output);
    
}