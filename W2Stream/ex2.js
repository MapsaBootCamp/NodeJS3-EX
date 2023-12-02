import fs from "fs"
import { Stream, Transform } from "stream"

function convertCSVtoJSON(csvData) {
  const lines = csvData.split("\n")
  const headers = lines[0].split(",")
  const jsonData = []

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(",")
    const entry = {}

    for (let j = 0; j < headers.length; j++) {
      entry[headers[j].trim()] = currentLine[j].trim()
    }

    jsonData.push(entry)
  }

  return jsonData
}

function transformStream(file) {
  const readfiles = fs.createReadStream(file)
  const toJson = new Transform({
    transform(chunk, encoding, callback) {
      const csvData = chunk.toString()
      const jsonData = convertCSVtoJSON(csvData)
      callback(null, JSON.stringify(jsonData, null, 2))
    },
  })
  const writeFile = fs.createWriteStream("W2Stream/output.json")
  readfiles.pipe(toJson).pipe(writeFile)
  console.log("Done!")
}
transformStream("W2Stream/ex2.csv")
