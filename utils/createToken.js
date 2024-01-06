const jwt = require('jsonwebtoken');

module.exports = async function createToken(
  payload,
  secretKey,
) {
  try {
    const accessToken = jwt.sign(payload, secretKey);
    return accessToken;
  } catch (error) {
    throw new Error(error.message);
  }
};