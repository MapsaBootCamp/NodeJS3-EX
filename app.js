require("dotenv").config()
const express = require("express")
const router = require("./routes")
const { loggerMessage } = require("./middleware")
const { ValidationError } = require("./errors")
const client = require("./db")
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(loggerMessage)
app.use("/api/v1", router)

app.get("/", (req, res) => {
  return res.send("Welcome!")
})

app.use((err, req, res, next) => {
  let message = "Server error"
  let statusCode = 500
  let nameError = "Error"

  if (err instanceof ValidationError) {
    message = err.message
    statusCode = err.statusCode
    nameError = err.name
  }
  return res.status(statusCode).json({
    error: true,
    nameError,
    message,
  })
})

client
  .connect()
  .then(async () => {
    console.log("Connected to db")
    // const list = await client.query("select * from users")
    // console.log(list)
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`)
// })
