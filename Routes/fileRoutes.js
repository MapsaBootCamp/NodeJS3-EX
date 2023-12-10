const express = require("express");
const multer = require("multer");
const {fileController} = require("../controller");
const {storage, fileFilter, limited} = require("../config/mullerConfig");

const upload = multer({
  storage: storage,
  limits: limited,
  fileFilter: fileFilter,
});

const app = express();
app
  .route("/:userID")
  .get(fileController.getFile)
  .post(upload.array("fileName"), fileController.createFile);
module.exports = app;
