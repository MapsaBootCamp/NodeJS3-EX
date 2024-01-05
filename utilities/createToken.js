const jwt = require('jsonwebtoken');
const prisma = require('../db.js');

async function createToken(payload, secretKey, refreshExpireTime, accessExpireTime, email = null){
    const refreshToken = jwt.sign(payload, secretKey, { expiresIn: refreshExpireTime });
    const accessToken = jwt.sign(payload, secretKey, { expiresIn: accessExpireTime });

    if (email){
        await prisma.token.create({
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

module.exports = createToken;