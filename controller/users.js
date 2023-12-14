const { users } = require("../data");
const { logger } = require("../provider");
const { validationError } = require("../error");
const { validationResult } = require("express-validator");
const _ = require("lodash");

module.exports = {
  userList: (req, res) => {
    res.json(users);
  },
  userDetail: (req, res) => {
    const { userID } = req.params;
    const filteredUsers = users.filter((user) => user.id === +userID);
    if (isNaN(+userID)) {
      res.status(400).send("wrong id");
    } else if (filteredUsers.length === 0) {
      res.status(404).send("user not found");
    }
    const user = filteredUsers.map((user) => ({
      id: user.id,
      name: user.userName,
    }));
    res.json(user);
  },
  newUser: (req, res, next) => {
    
    const user = { id: users.length + 1, ...req.body };
    logger.info(`${JSON.stringify(_.omit(user, ["password"]))} created!`);
    users.push(user);
    res.status(201).json({
      status: "status",
      message: "done",
    });
  },
  deleteuser: (req, res) => {
    const { userID } = req.params;
    const userIndex = users.findIndex((user) => user.id === +userID);
    if (userIndex === -1) {
      return res.status(404).send("user not found");
    }
    users.splice(userIndex, 1);
    return res.status(204).send("user deleted!");
  },
};
