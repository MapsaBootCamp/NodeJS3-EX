const multer = require("multer");
const fs = require("fs");
const path = require("path");

exports.storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = `./upload/${req.params.userID}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + file.originalname);
  },
});

exports.fileFilter = (req, file, callback) => {
  const allowedFileTypes = /(\.sh|\.msi|\.exe)$/;

  // Check if the file extension is allowed
  const extname = path.extname(file.originalname).toLowerCase();
  const isAllowed = !allowedFileTypes.test(extname);

  if (isAllowed) {
    callback(null, true);
  } else {
    // Reject other file types
    callback(new Error("Users cannot load executable files."), false);
  }
};

exports.limited = {fileSize: 12 * 1024 * 1024};
