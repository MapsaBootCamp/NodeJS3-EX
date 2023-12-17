const { users } = require("../data");
const { v4: uuidv4 } = require("uuid");

const usersList = (request, response) => {
  response.status(200).send(users);
};

const createUser = (request, response) => {
  const { ...userData } = request.body;
  const user = {
    userId: users.length + 1,
    ...userData,
    tasks: [],
  };
  users.push(user);
  response.status(201).send({
    message: "User Created Successfully",
  });
};

const updateUser = (request, response) => {
  const { userId } = request.params;
  const { userName } = request.body;
  const user = users.find((user) => user.userId === +userId);
  if (user) {
    if (userName) {
      user.userName = userName;
      response.send({
        message: "User Updated Successfully",
      });
    } else {
      response.status(400).send("Please Send userName !");
    }
  } else {
    response.status(400).send("User Not Found !");
  }
};

const addTasksUser = (request, response) => {
  const { userId } = request.params;
  const { title, description, status } = request.body;
  const user = users.find((user) => user.userId === +userId);
  const date = new Date();
  if (user) {
    if (title && description && status) {
      user.tasks.push({
        taskId: uuidv4(),
        dueDate: date.toISOString(),
        title,
        description,
        status,
      });
      response.send({
        message: "Tasks Add Successfully",
      });
    } else {
      response.status(400).send("Please Send Data !");
    }
  } else {
    response.status(400).send("User Not Found !");
  }
};

const taskUserId = (request, response) => {
  const { userId } = request.params;
  const user = users.find((user) => user.userId === +userId);
  if (user) {
    response.status(200).send(user.tasks);
  } else {
    response.status(400).send("User Not Found !");
  }
};
const taskUserIdTaskId = (request, response) => {
  const { userId, taskId } = request.params;
  const user = users.find((user) => user.userId === +userId);
  if (user) {
    const task = user.tasks.find((task) => task.taskId === taskId);
    if (task) {
      response.status(200).send(task);
    } else {
      response.status(400).send("Task Not Found !");
    }
  } else {
    response.status(400).send("User Not Found !");
  }
};

const updateTaskUser = (request, response) => {
  const { title, description, status } = request.body;
  const { userId, taskId } = request.params;
  const user = users.find((user) => user.userId === +userId);
  if (user) {
    const task = user.tasks.find((task) => task.taskId === taskId);
    if (task) {
      task.description = description;
      task.status = status;
      task.title = title;
      response.send({
        message: "Task updated successfullyone",
      });
    } else {
      response.status(400).send("Task Not Found !");
    }
  } else {
    response.status(400).send("User Not Found !");
  }
};

const deleteTaskUser = (request, response) => {
  const { userId, taskId } = request.params;
  const user = users.find((user) => user.userId === +userId);

  if (user) {
    const task = user.tasks.find((task) => task.taskId === taskId);
    if (task) {
      const findeIndex = user.tasks.findIndex((task) => task.taskId === taskId);
      if (findeIndex !== -1) {
        user.tasks.splice(findeIndex, 1);
        response.status(204).send("Done Delete !");
      } else {
        response.status(404).send("Task Not Found !");
      }
    }
  } else {
    response.status(404).send("User Not Found");
  }
};

const filterTask = (request, response) => {
  const { userId } = request.params;
  const user = users.find((user) => user.userId === +userId);
  if (user) {
    const { status } = request.query;
    const resTask = [];
    for (const task of user.tasks) {
      if (task.status === status) {
        resTask.push(task);
      }
    }
    response.send(resTask);
  } else {
    response.status(404).send("User Not Found");
  }
};

module.exports = {
  usersList,
  createUser,
  updateUser,
  addTasksUser,
  taskUserId,
  taskUserIdTaskId,
  updateTaskUser,
  deleteTaskUser,
  filterTask,
};
