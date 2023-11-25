import * as fs from "fs"

class CreateFile {
  constructor(filePath) {
    this.content = fs.readFileSync(filePath, "utf-8")
  }

  static checkDifference(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      console.log("They are the same!")
    } else {
      console.log("They have some diffrence...")
    }
  }
}

const A = new CreateFile("W2/Sample 1.txt")
const B = new CreateFile("W2/Sample 2.txt")
CreateFile.checkDifference(A, B) // output: They are the same!
