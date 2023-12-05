const express = require("express");
const userRoute = require("./users");
const commentRoute = require("./comments");

const router = express.Router();

router.use("/users", userRoute);
router.use("/comments", commentRoute);

module.exports = router;
