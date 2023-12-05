const express = require("express");
const { commnetController } = require("../controllers");

const router = express.Router();

router.get("/", commnetController.commentList);
router.post("/", commnetController.createComment);

module.exports = router;
