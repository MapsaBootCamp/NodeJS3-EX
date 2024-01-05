const { all } = require('../app.js');
const db = require('../db.js');
const { createToken } = require('../utilities');
require('dotenv').config();

async function createUser(req, res){
    const createdUser = await db.employee.create({
        data: {
            email: req.body.email,
        }
    })
    res.send(createdUser);
}

async function login(req, res){
    const user = await db.employee.findUnique({where: {email: req.body.email}});
    if (!user) throw new Error('username or password doesn\'t match!');
    const token = await createToken({ email: req.body.email }, process.env.SECRET_KEY, '3d', '1m', req.body.email);
    return res.status(200).send({token});
}

async function retrieveUsers(req, res){
    const allUsers = await db.employee.findMany({});
    res.send(allUsers);
}

async function getUsersDoneWork(req, res){
    const allUsersDoneWork = await db.employee.findMany({select: {
        email: true,
        doneWork: {
            select: {
                hours: true
            }
        }
    }})
    res.send(allUsersDoneWork);
}

module.exports = {
    createUser,
    retrieveUsers,
    login,
    getUsersDoneWork,
}