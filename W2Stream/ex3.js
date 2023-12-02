import fs from "fs"
import { Stream, Transform } from "stream"
import sharp from "sharp"
import { createCanvas, loadImage } from "canvas"

function addWatermark(inputImagePath, outputImagePath, watermarkText) {
  const readStream = fs.createReadStream(inputImagePath)
  const writeStream = fs.createWriteStream(outputImagePath)

  const watermarkTransform = new stream.Transform({
    transform(chunk, encoding, callback) {
      sharp(chunk)
        .resize(800, 600) // Adjust the size as needed
        .composite([
          {
            input: Buffer.from(`label:${watermarkText}`, {
              font: "Arial",
              fontSize: 30,
              fill: "rgba(255, 255, 255, 0.5)",
            }),
            gravity: "southeast",
          },
        ])
        .toBuffer((err, data) => {
          if (err) {
            return callback(err)
          }
          this.push(data)
          callback()
        })
    },
  })

  // Pipe the read stream through the transform stream to the write stream
  readStream.pipe(watermarkTransform).pipe(writeStream)

  // Handle the finish event when the processing is complete
  writeStream.on("finish", () => {
    console.log("Watermark added successfully!")
  })
}

// Example usage
const inputImagePath = "W2Stream/goatImage.png"
const outputImagePath = "W2Stream/WaterMarkGoatImage.png"
const watermarkText = "Aliiiiii"

addWatermark(inputImagePath, outputImagePath, watermarkText)
