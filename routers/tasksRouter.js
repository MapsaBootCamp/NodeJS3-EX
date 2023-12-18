const express= require("express")


const {taskController}=require("../controller")
const router= express.Router({mergeParams:true})

router.route("/").get(taskController.tasklist)

router 
.route("/:taskId")
.get(taskController.taskDetails)
.post(taskController.createTask)
.put(taskController.updateTask)
.delete(taskController.deletTask)

module.exports=router