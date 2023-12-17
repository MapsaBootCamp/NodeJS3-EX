require("dotenv").config();
const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const { winstonLogger } = require("./provider");

const app = express();
app.use(morgan("combined", { stream: winstonLogger.stream }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send(" Welcome ");
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(" RUN SERVER... !");
});
