

const express = require("express");
const userRoute = require("./userRouter");
const tasksRouter=require("./tasksRouter")


const router = express.Router({mergeParams: true});

router.use("/users", userRoute);
router.use("/users/:userId/tasks",tasksRouter)



module.exports = router;