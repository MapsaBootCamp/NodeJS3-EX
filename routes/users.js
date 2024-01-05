var express = require("express");
var router = express.Router();
const { user } = require("../controller");
const { jwtAuth } = require("../middleware");

/* GET users listing. */
router.get("/", user.getUser);

router.post("/login", user.login);

router.post("/createUser", jwtAuth.auth, user.createUser);

router.get("/getUsersDoneWork/:userId", user.getUserHours);

module.exports = router;
