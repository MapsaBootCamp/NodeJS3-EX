function numberToBuffer(value){
    let storage = [];
    if (Number.isInteger(value) && Number.isSafeInteger(value)){
        value = value + '';
        for (let item of value){
            storage.push(Number(item));
        }
        return Buffer.from(storage);

    } else if (Number.isInteger(value) && (!(Number.isSafeInteger(value)))){
        value = BigInt(value);
        value = value + '';
        for (let item of value){
            storage.push(Number(item));
        }
        return Buffer.from(storage);
    }
}

function bufferToNumber(value){
    let result = '';
    for (let item of value){
        result = result + item;
    }
    return result;
}

const A = numberToBuffer(195729524567890325235353532434324475657523456789876543);
console.log(A);
console.log(bufferToNumber(A));

// راه راحت - یا شاید من نمیفهمم داستان چیه