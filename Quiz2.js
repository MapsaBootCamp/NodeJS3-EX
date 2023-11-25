const fs = require("fs").promises;
class CheckCopy {
  constructor(file) {
    this.file = file;
  }
  async read() {
    let text = await fs.readFile(this.file, "utf-8");
    return text;
  }
  async isSame(text) {
    let text1 = await this.read();
    let text2 = await text.read();
    return text1 === text2;
  }
}
(async function result() {
  let content1 = new CheckCopy("./Sample1.txt");
  let content2 = new CheckCopy("./Sample2.txt");
  let res = await content1.isSame(content2);
  console.log(res);
})();
