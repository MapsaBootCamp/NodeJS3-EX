var express = require('express');
var router = express.Router();

const userRouter = require("./users");

router.use("/users" , userRouter)
module.exports = router;
