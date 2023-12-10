const data = require("../data");
module.exports = {
  createFile: (req, res) => {
    let param = req.params.userID;
    let user = data.users.find((user) => user.userId == +param);
    if (user) {
      user.files.push(req.files);
      res.status(200).send("done");
    } else {
      res.status(403).send("we cant find user");
    }
  },
  getFile: (req, res) => {
    let param = req.params.userID;
    let user = data.users.find((user) => user.userId == +param);
    if (user) {
      res.send(JSON.stringify(user.files));
    } else {
      res.status(403).send("we cant find user");
    }
  },
  updateFile: (req, res) => {},
  deleteFile: (req, res) => {},
};
