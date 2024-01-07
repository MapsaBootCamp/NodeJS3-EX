var express = require('express');
var router = express.Router();
const { userControllers } = require('../controllers');

/* GET users listing. */
router.get('/', userControllers.readUsers);

router.post('/login', userControllers.login);

router.post('/createUser', userControllers.authentication, userControllers.register);

router.get('/getUsersDoneWork', userControllers.getUsersDoneWork);

module.exports = router;