const { users } = require("../data.js");

module.exports = {
  tasklist: (req, res) => {
    const {userId} = req.params;
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const tasks = user.Tasks.map((task) => ({
      id: task.task_id,
      title: task.Title,
      statustask: task.status,
    }));
    res.json(tasks);
  },
  
  taskDetails: (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const task = user.Tasks.find((task) => task.task_id === parseInt(taskId));
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    const taskDetails = {
      id: task.task_id,
      title: task.Title,
      statustask: task.status,
      description : task.description,
      dueDate: task.due_date
    };
    res.json(taskDetails);
  },

  createTask: (req, res) => {
    const userId = req.params.userId;
    const user = users.find((user) => user.id === parseInt(userId));
    console.log(user);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const task = {
      task_id: user.Tasks.length + 1,
      Title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
      status: req.body.status,
    };
    user.Tasks.push(task);
    res.json({ message: "Task created successfully", task });
  },

  updateTask: (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const task = user.Tasks.find((task) => task.task_id === parseInt(taskId));
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    task.Title = req.body.title || task.Title;
    task.description = req.body.description || task.description;
    task.due_date = req.body.due_date || task.due_date;
    task.status = req.body.status || task.status;
    res.json({ message: "Task updated successfully", task });
  },

  deletTask: (req, res) => {
    const userId = req.params.userId;
    const taskId = req.params.taskId;
    const user = users.find((user) => user.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
     const taskIndex =user.Tasks.findIndex((task)=> task.task_id===parseInt(taskId))
     if(taskIndex=== -1){
      return res.status(404).json({error : "Task not found"})
     }
     const deletTask= user.Tasks.splice(taskIndex)[0]
     res.json({message : "Task deleted successfully", task: deletTask})
    },
  }