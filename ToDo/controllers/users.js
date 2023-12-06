const _ = require('lodash');
const { users } = require('../database');

function usersList(req, res){
    res.json(
        users.map(user => ({
            id: user.id,
            name: user.nickName,
            age: user.age,
            Admin: user.isAdmin,
        }))
    );
}

function userDetail(req, res){
    const { id } = req.params;
    const index = users.findIndex(user => user.id === +id);
    res.json(_.omit(users[index], ["password"]));
}

function createUser(req, res){
    const { nickName, password, age } = req.body;
    if (users.find(user => user.nickName === nickName)) return res.status(400).send('this username already exists! try another one.');
    const newUser = {
        id: Math.floor(Math.random() * 10e1),
        nickName: nickName,
        password: password,
        age: age,
        isAdmin: false,
    }
    users.push(newUser);
    res.status(200).send(`successfully created! ${JSON.stringify(newUser)}`);
}

function updateUser(req, res){
    const { id } = req.params; 
    const { oldPassword, newPassword, newNickName } = req.body;
    const index = users.findIndex(user => user.id === +id)
    if (users[index].password === oldPassword){
        if (users.find(user => user.nickName === newNickName)) return res.status(400).send('username already exists! try another one.');
        users[index].password = newPassword;
        users[index].nickName = newNickName;
        res.status(200).send('all Good, successfully updated user information!');
    } else {
        res.status(400).send('unAuthorized!');
    }
}

module.exports = {
    usersList,
    userDetail,
    createUser,
    updateUser,
}