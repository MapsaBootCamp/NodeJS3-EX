const { createToken } = require('../utils');
const { EmployeeService } = require('../services');

const employeeService = new EmployeeService();

exports.login = async (request, response, next) => {
  try {
    const { email } = request.body;
    const employee = await employeeService.login(email);
    if (!employee) {
      throw new Error('Employee with this email was not found.');
    }
    const token = await createToken(employee,process.env.KEY);
    return response.json({ token});
  } catch (error) {
    next(error);
  }
};

exports.employeesList = async (request, response, next) => {
 try{
     const employees =  await employeeService.getEmployeeList();
     return response.json(employees);
} 
catch(error){
   console.log('getEmployeeList: ', error);
}
};

exports.createEmployee= async (request, response, next) => {
  try {
    const superAdmin = request.employee;
    const { name, email } = request.body;
    if (superAdmin?.roles.find(role=> role.name === 'superadmin')) {
      const employee =  await employeeService.createEmployee(name, email );
      return response.send({
        ...employee,
        status: 200,
        id: String(employee.id)
      });
    }
    else{
      throw new Error('You are not superadmin.');
    }
  } catch (error) {
    next(error);
  };

};

exports.getEmployeeDoneWork= async (request, response, next) => {
  try {
    let status;
    const {id} = request.query;
    const employeeId = Number(id);
    const isExistEmployee =  await employeeService.employeeExist(employeeId);
    if(isExistEmployee){
      const employee =  await employeeService.getDoneWork(employeeId);
      if(employee.doneWork.length > 0 && (employee.doneWork?.[0].department || employee.doneWork?.[0])){
        const diffTime = employee.doneWork?.[0].department.requiredHours - employee.doneWork?.[0].hours;
        if(diffTime === 0){
          status='Your working hours EQUAL requiredHours';
        }
        else if(diffTime > 0 ){
          status='Your working hours LESS THAN requiredHours';
        }
        else if(diffTime < 0){
          status='Your working hours MORE THAN requiredHours';
        }
        return response.json({
          ...employee,
          diffTime,
          status,
        });
      }
      else{
        throw new Error('Employee Not Definition working hours Or requiredHours.');
      }
    }
    else{
      throw new Error('Employee Not Found.');
    }
  } catch (error) {
    next(error);
  };
};