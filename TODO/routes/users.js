const express = require("express");
const router = express.Router();
const { users } = require("../controllers");

router.route("/").get(users.usersList).post(users.createUser);

router.route("/:userId").put(users.updateUser).get(users.filterTask);

router.route("/:userId/tasks").post(users.addTasksUser).get(users.taskUserId);

router
  .route("/:userId/tasks/:taskId")
  .get(users.taskUserIdTaskId)
  .put(users.updateTaskUser)
  .delete(users.deleteTaskUser);

module.exports = router;
