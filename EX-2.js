const fs = require("fs");
const path = require("path");
const PNG = require("pngjs").PNG;

class ImageProcessor {
  read(imagePath) {
    const imageBuffer = fs.readFileSync(imagePath);
    const png = PNG.sync.read(imageBuffer);
    console.log(png);
    this.width = png.width;
    this.height = png.height;
    this.data = png.data;
  }
  convertToBlackAndWhite() {
    for (let i = 0; i < this.data.length; i += 4) {
      const avg = (this.data[i] + this.data[i + 1] + this.data[i + 2]) / 3;
      this.data[i] = avg;
      this.data[i + 1] = avg;
      this.data[i + 2] = avg;
    }
  }
  saveToFile(filename) {
    fs.writeFileSync(
      filename,
      PNG.sync.write({
        width: this.width,
        height: this.height,
        data: this.data,
      })
    );
    console.log(`Image saved to ${filename}`);
  }
}
const imagePath = path.join(__dirname, "./ax.png");
const imageProcessor = new ImageProcessor();
imageProcessor.read(imagePath);
imageProcessor.convertToBlackAndWhite();
imageProcessor.saveToFile("output.png");