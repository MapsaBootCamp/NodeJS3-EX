const express = require('express');
const router = express.Router();
const { 
  login,
  employeesList,  
  createEmployee,
  getEmployeeDoneWork,
} = require('../controllers/employeeController');
const { authentication } = require('../middleware');

router.post('/login', login);
router.get('/employeesList', employeesList);
router.post('/getEmployeeDoneWork', getEmployeeDoneWork);
router.post('/createEmployee', authentication, createEmployee);

module.exports = router;
