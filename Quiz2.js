import * as fs from 'fs'

class saveAndCompare {
    
    constructor(path){
        this.str = fs.readFileSync(`${path}`, "utf8");
    }

    Compare(str1) {
        if (this.str === str1.str) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

const a = new saveAndCompare("Sample 1.txt");
const b = new saveAndCompare("Sample 2.txt");
const c = new saveAndCompare("Sample 3.txt");

a.Compare(b);
a.Compare(c);

console.log("////////////////////////////////////////////////////////////////////////////////");

b.Compare(a);
b.Compare(c);

console.log("////////////////////////////////////////////////////////////////////////////////");

c.Compare(a);
c.Compare(b);

console.log("////////////////////////////////////////////////////////////////////////////////");

a.Compare(b);