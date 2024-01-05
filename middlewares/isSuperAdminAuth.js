const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('../db.js');

async function isSuperAdminAuthentication(req, res, next){
    try {
        const { authorization } = req.headers;
        if (!authorization) {
          throw new MyError("token dar header lazeme", 401);
        }
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        if (payload) {
          const email = payload.email;
          const user = await db.employee.findUnique({where: {email}});
          req.user = user;
          if (user.roles === 'superadmin') next()
          else throw new Error('not Authorized');
        }
      } catch (e) {
        throw new Error(e);
      }
}

module.exports = isSuperAdminAuthentication;