const fs = require('fs');
const zlib = require('zlib');

function compression(path){
    if (typeof path !== 'string') throw new Error('path should be of type: string!');
    if (path.slice(-3) !== 'txt') throw new Error('file type must be TEXT(.txt)!');
    fs.createReadStream(`./${path}`, 'utf8').pipe(zlib.createDeflate()).pipe(fs.createWriteStream('./compressed.txt.gz', 'utf8'));
}

function deCompression(path){
    if (typeof path !== 'string') throw new Error('path should be of type: string!');
    if (path.slice(-2) !== 'gz') throw new Error('file type must be gz!');
    fs.createReadStream(`./${path}`)
    .on('error', (err) => {console.log(err, 'while ReadStream')})
    .pipe(zlib.createInflate())
    .on('error', (err) => {console.log(err, 'while ZLIB')})
    .pipe(fs.createWriteStream('./decompressed.txt'))
    .on('error', (err) => {console.log(err, 'while WriteStream')});
}

// compression('pw.txt');
deCompression('compressed.txt.gz');

// با توجه به استفاده ای که الان میخوایم بکنیم هرکدوم از تابع های بالا و استفاده میکنیم، ولی باهم نه