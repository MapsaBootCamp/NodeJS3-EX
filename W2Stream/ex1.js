import fs from "fs"
import { Stream } from "stream"

function fileStream(filename) {
  const readfiles = fs.createReadStream(filename)
  const writeFile = fs.createWriteStream("W2Stream/output.txt")
  readfiles.pipe(writeFile)
  console.log("Done!")
}
fileStream("W2Stream/input.txt")
