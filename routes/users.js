var express = require('express');
var router = express.Router();
const { userControllers } = require('../controllers');
const { superAdminAuth } = require('../middlewares');

/* GET users listing. */
router.get('/', userControllers.retrieveUsers);

router.post('/login', userControllers.login);

router.post('/createUser', superAdminAuth, userControllers.createUser);

router.get('/getUsersDoneWork', userControllers.getUsersDoneWork);

module.exports = router;
