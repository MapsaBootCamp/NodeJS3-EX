const express = require("express");
const { userController } = require("../controllers");
const { validators } = require("../middlewares");
const router = express.Router();

router
  .route("/")
  .get(userController.userList)
  .post(
    ...validators.createUserValidator,
    validators.validationErrorHandler,
    userController.createUser
  );

router
  .route("/:userId")
  .get(userController.userDetail)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

// localhost:3000/users/
// localhost:3000/users/userId
