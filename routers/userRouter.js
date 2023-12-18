const express = require("express");
const { userController } = require("../controller");
const { validations } = require("../middleware");
const router = express.Router();


router.route("/").get(userController.userList).post(userController.createUser)

router
  .route("/")
  .get(userController.userList)
  .post(
    ...validations.createUserValidator,
    validations.validationErrorHandler,
    userController.createUser
  );

router
  .route("/:userId")
  .get(userController.userDetail)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;