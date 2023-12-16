const { users } = require("../data")
const _ = require("lodash")
const { logger } = require("../providers")
const client = require("../db")

module.exports = {
  userTaskList: async (req, res) => {
    const { userId } = req.params

    console.log(task_id)
    const tasks = await client.query(
      `SELECT * FROM tasks where user_id = ${userId} and task_id = ${task_id};`,
    )
    console.log(tasks)
    res.json(tasks.rows)

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid userId format" })
    }

    // const user = users.find((user) => user.id === parseInt(userId, 10))

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    // const tasks = user.tasks.map((task) => ({
    //   id: task.id,
    //   title: task.title,
    // }))

    // res.json(tasks)
  },
  userCreateTask: (req, res, next) => {
    const userId = req.params.userId
    const user = users.find((user) => user.id === parseInt(userId))

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const newTask = {
      id: user.tasks.length + 1,
      byUser: userId,
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
      status: req.body.status,
    }
    logger.info(`${JSON.stringify(newTask)} created!`)

    user.tasks.push(newTask)

    res.json({ message: "Task created successfully", task: newTask })
    next()
  },
  taskDetialList: (req, res) => {
    const userId = req.params.userId
    const taskId = req.params.taskId
    console.log("userId:", userId, "typeOf:", typeof userId)

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid userId format" })
    }

    const user = users.find((user) => user.id === parseInt(userId, 10))
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }
    const task = user.tasks.find((task) => task.id === parseInt(taskId, 10))

    if (!task) {
      return res.status(404).json({ error: "Task not found" })
    }

    const tasks = {
      id: task.id,
      title: task.title,
      description: task.description,
      due_date: task.due_date,
      status: task.status,
    }

    res.json(tasks)
  },
  userUpdateTask: (req, res) => {
    const userId = req.params.userId
    const taskId = req.params.taskId

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid userId format" })
    }

    const user = users.find((user) => user.id === parseInt(userId, 10))

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const task = user.tasks.find((task) => task.id === parseInt(taskId, 10))

    if (!task) {
      return res.status(404).json({ error: "Task not found" })
    }

    const { title, description, due_date, status } = req.body
    task.title = title || task.title
    task.description = description || task.description
    task.due_date = due_date || task.due_date
    task.status = status || task.status

    res.json({ message: "Task details updated successfully", task })
  },
  userDeleteTask: (req, res) => {
    const userId = req.params.userId
    const taskId = req.params.taskId

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid userId format" })
    }

    const user = users.find((user) => user.id === parseInt(userId, 10))

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const taskIndex = user.tasks.findIndex(
      (task) => task.id === parseInt(taskId, 10),
    )

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" })
    }

    const deletedTask = user.tasks.splice(taskIndex, 1)[0]

    res.json({ message: "Task deleted successfully", task: deletedTask })
  },
}
