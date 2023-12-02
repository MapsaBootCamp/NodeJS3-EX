import * as http from "http"
import * as fs from "fs"
import * as url from "url"

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader("Content-Type", "text/plain")

  const readableStream = fs.createReadStream("W2Stream/largefile.txt", {
    encoding: "utf8",
  })

  readableStream.pipe(res)

  readableStream.on("error", (err) => {
    console.error("Error reading file:", err)
    res.statusCode = 500
    res.end("Internal Server Error")
  })
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
