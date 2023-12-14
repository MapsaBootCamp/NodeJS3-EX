const { stringify } = require("querystring");
const { users } = require("../data");

module.exports = {
  userTasks: (req, res) => {
    const { userID } = req.params;
    const filteredUsers = users.filter((user) => user.id === +userID);
    const userTasks = filteredUsers.map((user) => user.tasks);
    res.json(userTasks);
  },
  userTaskDetail: (req, res) => {
    const { userID, taskID } = req.params;
    const user = users.find((user) => user.id === +userID);
    const task = user.tasks.find((task) => task.taskID == taskID);
    res.json(task);
  },
  newTask: (req, res) => {
    const { userID } = req.params;
    const user = users.find((user) => user.id === +userID);
    const newTaskID = user.tasks.length + 1;
    const newTask = { taskID: newTaskID, ...req.body };
    user.tasks.push(newTask);
    res.status(201).json({
      status: "success",
      message: "Task added successfully",
      newTask,
    });
  },
  updateTask: (req, res) => {
    const { userID, taskID } = req.params;
    const user = users.find((user) => user.id === +userID);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const task = user.tasks.find((task) => task.taskID === +taskID);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    const { title, description, status, due_date } = req.body;
    if (title) {
      task.title = title;
    }
    if (description) {
      task.description = description;
    }
    if (status) {
      task.status = status;
    }
    if (due_date) {
      task.due_date = due_date;
    }

    res.status(200).json({
      status: "success",
      message: "Task updated successfully",
      updatedTask: task,
    });
  },
  sortTask: (req, res) => {
    const { userID } = req.params;
    const user = users.find((user) => user.id === +userID);
    if (!user) {
      return res.status(404).send("User not found");
    }
    user.tasks.forEach((task) => {
      if (!task.due_date) {
        task.due_date = new Date(0);
      }
    });
    const sortedTasks = user.tasks.sort((a, b) => a.due_date - b.due_date);
    res.status(200).json({
      sortedTasks,
    });
  },
  filterTask: (req, res) => {
    const { userID, status } = req.params;
    const user = users.find((user) => user.id === +userID);
    if (!user) {
      return res.status(404).send("User not found");
    }
    let filterTasks = [];
    if (status === "in_progress") {
      filterTasks = user.tasks.filter((task) => task.status === "in_progress");
    } else if (status === "pending") {
      filterTasks = user.tasks.filter((task) => task.status === "pending");
    } else {
      return res.status(400).send("Invalid status");
    }
    res.status(200).json({
      filterTasks,
    });
  },
};
