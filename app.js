const express = require("express");
const dontenv = require("dotenv").config();
const {fileRoutes} = require("./Routes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/file", fileRoutes);

app.listen(port, () => console.log(`this server run on port ${port}`));
