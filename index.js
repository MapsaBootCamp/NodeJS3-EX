import * as fs from 'fs'
class fileSystem{
    constructor(dirFile){
        this.file = fs.readFileSync(dirFile)
    }
    checkSame(obj){
        let res = Buffer.compare(this.file,obj.file)
        return !res ?  true : false ;
    }
}

let i1 = new fileSystem('text1.txt')
let i2 = new fileSystem('text2.txt')
let i3 = new fileSystem('text3.txt')

console.log(i1.checkSame(i2));
console.log(i2.checkSame(i1));
console.log(i3.checkSame(i1));
console.log(i1.checkSame(i3));
console.log(i2.checkSame(i3));
console.log(i3.checkSame(i2));
