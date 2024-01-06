const prisma = require('../Database/db');

class EmployeeService {
    constructor() {
      this.prisma = prisma;
    }

  #exclude(employee, keys) {
    return Object.fromEntries(
      Object.entries(employee).filter(([key]) => !keys.includes(key))
    );
  }

  async getEmployeeByEmail(employeeEmail) {
    try{
        const employee = await prisma.employee.findUniqueOrThrow({
            where: { email: employeeEmail  },
            include:{roles: true},
          });
          return employee;
    }
    catch(error){
      console.log('getEmployeeByEmail: ', error);
    }
  }

  async login(employeeEmail){
    try{
        const employee = await prisma.employee.findFirstOrThrow({ 
            where: { email: employeeEmail } ,
            include: {roles: true}
        });
        return employee;
    } 
    catch(error){
       console.log('loginError: ', error);
    }
  }  

  async getEmployeeList(){
    try{
        let employees = await prisma.employee.findMany({
          include:{
            roles: true,
            doneWork: true
          }
        });
        return employees;
    } 
    catch(error){
       console.log('getEmployeeList: ', error);
    }
  }  

  async createEmployee(
    name,
    email
  ){
    try{
      const employee = await prisma.employee.create({
        data: {
          name: name,
          email: email,
        },
      });
        return employee;
    } 
    catch(error){
       console.log('createEmployee: ', error);
    }
  }  

  async employeeExist(employeeId) {
    try{
        const employee = await prisma.employee.findUniqueOrThrow({
            where: { id: employeeId  },
          });
          return true;
    }
    catch(error){
      console.log('employeeExist: ', error);
    }
  }

  async getDoneWork(employeeId){
    try{
      const employee = await prisma.employee.findUniqueOrThrow({ 
            where: { 
              id: employeeId 
            },
            include: {
              doneWork: {
                select: {
                  hours: true,
                  department: {
                    select: {
                      requiredHours: true,
                    },
                  },
                },
              },
            },
        });
        return employee;
    } 
    catch(error){
       console.log('getEmployeeDoneWork: ', error);
    }
  } 

}

module.exports = EmployeeService;
