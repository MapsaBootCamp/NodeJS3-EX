import fs from "fs";

class FileReader{
    constructor(address){
        if (typeof address !== 'string') throw new Error('the address of a file must be of type: string!');
        this.data = fs.readFileSync(address, (err, data) => {
            if (err) console.log('error while reading the file');
        })
    }

    static compare(obj1, obj2){
        if (obj1 instanceof this && obj2 instanceof this){
            if (!Buffer.compare(obj1.data, obj2.data)){
                return true;
            } else {
                return false;
            }
        } else {
            throw new Error('arguments of this method, should be instances of class: FileReader!');
        }
    }
}

const file1 = new FileReader('./Sample1.txt');
const file2 = new FileReader('./Sample2.txt');
const file3 = new FileReader('./Sample3.txt');

console.log(FileReader.compare(file1, file2));
console.log(FileReader.compare(file1, file3));
console.log(FileReader.compare(file2, file3));