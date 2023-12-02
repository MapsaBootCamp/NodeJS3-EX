import fs from "fs"
import CombinedStream from "combined-stream"
import { Stream } from "stream"

function fileStream(file1, file2, file3) {
  const combinedStream = CombinedStream.create()
  combinedStream.append(fs.createReadStream(file1))
  combinedStream.append(fs.createReadStream(file2))
  combinedStream.append(fs.createReadStream(file3))
  const writeFile = fs.createWriteStream("W2Stream/concatenated.txt")
  combinedStream.pipe(writeFile)
  console.log("Done!")
}
fileStream("W2Stream/input.txt", "W2Stream/input2.txt", "W2Stream/input3.txt")

const fileNames = [
  "W2Stream/input.txt",
  "W2Stream/input2.txt",
  "W2Stream/input3.txt",
]
const outputFile = "W2Stream/concatenated.txt"
