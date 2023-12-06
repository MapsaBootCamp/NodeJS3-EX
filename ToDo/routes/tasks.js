const express = require('express');
const { taskControllers } = require('../controllers');

const router = express.Router();

router.route('/createTask')
    .post(taskControllers.createTask)

router.route('/:taskId')
    .get(taskControllers.showTaskDetail)
    .put(taskControllers.updateTask)
    .delete(taskControllers.deleteTask);

router.route('/ownTasks/user:Id')
    .get(taskControllers.ownTasks);

module.exports = router;