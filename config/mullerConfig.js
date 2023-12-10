const multer = require("multer");
const fs = require("fs");

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
