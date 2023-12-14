const express = require("express");
const { taskController } = require("../controller");

const router = express.Router();

router
.get('/:userID/tasks', taskController.userTasks)
.post('/:userID/tasks', taskController.newTask)

router
.get('/:userID/tasks/:taskID', taskController.userTaskDetail)
.put('/:userID/tasks/:taskID', taskController.updateTask)

router.get('/:userID/sorttask',taskController.sortTask)
router.get('/:userID/:status',taskController.filterTask)

module.exports = router;