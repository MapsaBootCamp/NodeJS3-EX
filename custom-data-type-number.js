let buffer = Buffer.alloc(8); 

// function storeNumberInBuffer(number) {
//     buffer.writeUInt32LE(number, 0); 
// }

// function getNumberFromBuffer() {
//     return buffer.readUInt32LE(0); 
// }


function storeNumberInBuffer(number) {
    buffer.writeBigUInt64LE(BigInt(number), 0); 
}

function getNumberFromBuffer() {
    return buffer.readBigUInt64LE(0); 
}


let input = parseInt(process.argv[2]);
storeNumberInBuffer(input);

console.log("number : " + getNumberFromBuffer());


// node custom-data-type-number.js <number>
