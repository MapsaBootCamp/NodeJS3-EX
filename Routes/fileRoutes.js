const express = require("express");
const multer = require("multer");
const {fileController} = require("../controller");
const {storage} = require("../config/mullerConfig");

const upload = multer({
  storage: storage,
  limits: {fileSize: 12 * 1024 * 1024},
});

const app = express();
app
  .route("/:userID")
  .get(fileController.getFile)
  .post(upload.array("fileName"), fileController.createFile);
module.exports = app;
