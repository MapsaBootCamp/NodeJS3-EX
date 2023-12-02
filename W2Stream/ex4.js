import fs, { readFile } from "fs"
import { Stream, Transform } from "stream"
import zlib from "zlib"

function compressedFile(filename) {
  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream("W2Stream/compressed.txt")

  const compressStream = new Transform({
    transform(chunk, encoding, callback) {
      const compressedData = zlib.gzipSync(chunk)

      callback(null, compressedData)
    },
  })

  readStream
    .pipe(compressStream)
    .on("error", (err) => {
      console.error("Error compressing file:", err)
    })
    .pipe(writeStream)
    .on("error", (err) => {
      console.error("Error writing file:", err)
    })
    .on("finish", () => {
      console.log("Done!")
    })
}
compressedFile("W2Stream/input.txt")

function uncompressedFile(filename) {
  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream("W2Stream/uncompressed.txt")

  const decompressStream = new Transform({
    transform(chunk, encoding, callback) {
      const decompressedData = zlib.gunzipSync(chunk)
      callback(null, decompressedData)
    },
  })

  readStream
    .pipe(decompressStream)
    .on("error", (err) => {
      console.error("Error compressing file:", err)
    })
    .pipe(writeStream)
    .on("error", (err) => {
      console.error("Error writing file:", err)
    })
    .on("finish", () => {
      console.log("Done!")
    })
}
uncompressedFile("W2Stream/compressed.txt")
