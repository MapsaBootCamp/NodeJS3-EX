const { all } = require('../app.js');
const jwt = require('jsonwebtoken');
const db = require('../db.js');
require('dotenv').config();

async function createToken(payload, secretKey, refreshExpireTime, accessExpireTime, email = null){
    const refreshToken = jwt.sign(payload, secretKey, { expiresIn: refreshExpireTime });
    const accessToken = jwt.sign(payload, secretKey, { expiresIn: accessExpireTime });

    if (email){
        await db.token.create({
            data: {
                userEmail: email,
                token: refreshToken
            }
        })
    }
    return {
        refreshToken,
        accessToken
    }
}

async function authentication(req, res, next){
    try {
        const { authorization } = req.headers;
        if (!authorization) {
          throw new MyError("token nis", 401);
        }
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if (payload) {
          const email = payload.email;
          const user = await db.employee.findUnique({where: {email}});
          req.user = user;
          if (user.roles === 'superadmin') next()
          else throw new Error('admin nisti');
        }
      } catch (e) {
        throw new Error(e);
      }
}

async function register(req, res){
    const createdUser = await db.employee.create({
        data: {
            email: req.body.email,
        }
    })
    res.send(createdUser);
}

async function login(req, res){
    const user = await db.employee.findUnique({where: {email: req.body.email}});
    if (!user) throw new Error('username password nemikhune');
    const token = await createToken({ email: req.body.email }, process.env.SECRET_KEY, '1d', '1m', req.body.email);
    return res.status(200).send({token});
}

async function readUsers(req, res){
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
    register,
    readUsers,
    login,
    getUsersDoneWork,
    authentication,
}