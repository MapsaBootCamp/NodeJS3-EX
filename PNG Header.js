// ---------------------------------------------------------------
const data = fs.readFileSync('./input.png', (err, data) => {
    if (err) console.log(err, 'while reading the file!');
})

let width = data.slice(16, 20);
let height = data.slice(20, 24);
let IDAT = '';
for (let i = 0 ; i < data.length ; i++){
    if (IDAT.slice(-4) === 'IDAT') break;
    IDAT += String.fromCharCode(data[i].toString());
}

let resultWidth = 0;
let resultHeight = 0;

for (let i = 0; i < width.length; i++) {
    resultWidth += parseInt(width[width.length - i - 1]) * Math.pow(16, 2 * i);
}
for (let i = 0; i < height.length; i++) {
    resultHeight += parseInt(height[height.length - i - 1]) * Math.pow(16, 2 * i);
}

// console.log(resultWidth, 'x', resultHeight, `IDAT starting index is: ${IDAT.length - 4}`, 'real data starts from', IDAT.length);
// -----------------------------------------------------------