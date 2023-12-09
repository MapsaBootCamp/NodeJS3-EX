const express = require("express");
const multer = require("multer");
const {fileController} = require("../controller");
const upload = multer({dest: "uploads/"});

const app = express();
app
  .route("/:userID")
  .get(fileController.getFile)
  .post(upload.single("avatar"), fileController.createFile);
module.exports = app;
