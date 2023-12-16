const express = require("express")
const { userController } = require("../controllers")
const { validators } = require("../middleware")
const router = express.Router()

router
  .route("/")
  .get(userController.userList)
  .post(
    ...validators.createUserValidator,
    validators.validationErrorHandler,
    userController.createUser,
  )

router
  .route("/:userId")
  .get(userController.userDetial)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

module.exports = router
