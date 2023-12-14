const express = require("express");
const { userController } = require("../controller");
const { validators } = require("../middlewares");

const router = express.Router();

router
  .get("/", userController.userList)
  .post(
    "/",
    ...validators.createUserValidator,
    validators.validationErrorHandler,
    userController.newUser
  );

router
  .get("/:userID", userController.userDetail)
  .delete("/:userID", userController.deleteuser);

module.exports = router;
