const jwt = require('jsonwebtoken');
const { CustomError  } = require('../error');
const { EmployeeService } = require('../services');

const employeeService = new EmployeeService();

const authentication = async (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      throw new CustomError ('Token Not Found In Header', 401);
    }
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.KEY);
    if (payload) {
      const email = payload.email;
      const employee = await employeeService.getEmployeeByEmail(email);
      request.employee = employee;
      next();
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
