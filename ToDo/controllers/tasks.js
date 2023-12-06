const { tasks } = require('../database');
const { users } = require('../database');

function createTask(req, res){
    const { userId, title, description, dueDate, status } = req.body;
    const date = new Date();
    const index = users.findIndex(user => user.id === + userId);
    if (users.find(user => user.id === +userId)) {
        const newTask = {
            taskId: tasks.length + 1,
            byUser: users[index].nickName,
            title: title,
            description: description,
            dueDate: date.getDate() + dueDate,
            status: status || 'pending',
        }
        tasks.push(newTask);
        res.status(200).send(`${users[index].nickName} successfully created a new Task which is: ${newTask.title}`);
    } else {
        res.status(400).send('invalid userId');
    }
}

function showTaskDetail(req, res){
    const { taskId } = req.params;
    const index = tasks.findIndex(task => task.taskId === +taskId);
    res.json(tasks[index]);
}

function ownTasks(req, res){
    const { Id } = req.params;
    const userIndex = users.findIndex(user => user.id === +Id);
    const user = users[userIndex];
    res.json(tasks.filter(task => task.byUser === user.nickName));
}

function updateTask(req, res){
    const { taskId } = req.params;
    const { userId, description, status, dueDate } = req.body;

    const task = tasks.find(task => task.taskId === +taskId);
    const user = users.find(user => user.id === +userId);

    if (task.byUser === user.nickName){
        task.status = status;
        task.description = description;
        task.dueDate = dueDate;
        res.status(200).send('successfull!');
    } else {
        res.status(400).send('unAuthorized!');
    }
}

function deleteTask(req, res){
    const { taskId } = req.params;
    const { userId } = req.body;

    const index = tasks.findIndex(task => task.taskId === +taskId);
    const user = users.find(user => user.id === +userId);

    if (tasks[index].byUser === user.nickName){
        tasks.splice(index, 1);
        res.status(200).send(`success!`);
    } else {
        res.status(400).send('unAuthorized!');
    }
}

module.exports = {
    createTask,
    showTaskDetail,
    ownTasks,
    updateTask,
    deleteTask,
}