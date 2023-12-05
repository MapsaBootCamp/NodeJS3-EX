const express = require('express');
const { taskController } = require('../controllers');
const { validators } = require('../middlewares');
const router = express.Router();

router
    .route('/')
    .get(taskController.taskList)
    .post(
        ...validators.createtaskValidator,
        validators.validationErrorHandler,
        taskController.createtask
    );

router
    .route('/:taskId')
    .get(taskController.taskDetail)
    .put(taskController.updaeTask)
    .delete(taskController.deleteTask);

module.exports = router;
