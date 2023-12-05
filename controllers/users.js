const { users } = require("../data");
const { logger } = require("../providers");
const _ = require("lodash");
const { validationResult } = require("express-validator");
const { ValidationError } = require("../errors");

module.exports = {
  userList: (req, res) => {
    res.json(users.map((user) => ({ id: user.id, name: user.userName })));
  },
  userDetail: (req, res) => {
    const valResult = validationResult(req);

    console.log(valResult.array());

    const { userId } = req.params;
    console.log(typeof userId);
    if (!Number.isInteger(+userId)) {
      return res.status(400).send("user id lazemeh");
    }
    res.json(users.find((user) => user.id === +userId));
  },
  createUser: (req, res, next) => {
    const user = { id: users.length + 1, ...req.body };
    logger.info(`${JSON.stringify(_.omit(user, ["password"]))} created!`);
    users.push(user);
    res.status(201).json({
      status: "success",
      message: _.omit(user, ["password"]),
    });
  },
  updateUser: (req, res) => {
    const { userId } = req.params;
    const { userName, phoneNumber } = req.body;
    const user = users.find((user) => user.id === +userId);
    if (!user) {
      return res.status(404).send("nadarim!");
    }
    for (const user of users) {
      if (user.id === +userId) {
        userName && (user.userName = userName);
        phoneNumber && (user.phoneNumber = phoneNumber);
        return res.status(200).json(user);
      }
    }
  },
  deleteUser: (req, res) => {
    const { userId } = req.params;
    const userIndex = users.findIndex((user) => user.id === +userId);
    if (userIndex === -1) {
      return res.status(404).send("nadarim!");
    }
    users.splice(userIndex, 1);
    return res.status(204).send("be khubi khoshi pak shod");
  },
};
