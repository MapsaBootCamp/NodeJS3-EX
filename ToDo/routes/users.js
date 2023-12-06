const express = require('express');
const { userControllers } = require('../controllers');
const { taskControllers } = require('../controllers');

const router = express.Router(); // users

router.route('/')
    .get(userControllers.usersList)
    .post(userControllers.createUser);

router.route('/:id')
    .get(userControllers.userDetail)
    .put(userControllers.updateUser);

module.exports = router;