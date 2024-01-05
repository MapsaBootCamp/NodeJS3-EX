const jwt = require("jsonwebtoken");
const auth = (request, response, next) => {
  try {
    const authHeader = request.header("Authorization").split(" ");
    const token = authHeader[1];
    const jwtPayload = jwt.verify(token, process.env.KEY);
    const { role } = jwtPayload;
    request.role = role;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  auth,
};
