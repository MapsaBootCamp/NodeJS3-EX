const express = require("express")
const { taskController } = require("../controllers")
const { validators } = require("../middleware")
const router = express.Router({ mergeParams: true })

router
  .route("/")
  .get(taskController.userTaskList)
  .post(
    ...validators.createTaskValidator,
    validators.validationErrorHandler,
    taskController.userCreateTask,
  )

router
  .route("/:taskId")
  .get(taskController.taskDetialList)
  .put(taskController.userUpdateTask)
  .delete(taskController.userDeleteTask)

module.exports = router
