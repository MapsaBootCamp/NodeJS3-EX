const prisma = require("../db");
const jwt = require("jsonwebtoken");
const getUser = async (request, response) => {
  try {
    const user = await prisma.employee.findMany({
      include: {
        roles: true,
        doneWork: true,
      },
    });
    response.send(user);
  } catch (error) {
    console.log(error);
  }
  const user = prisma.employee.findMany({
    include: {
      roles: true,
      doneWork: true,
    },
  });
};

const getUserHours = async (request, response) => {
  try {
    const { userId } = request.params;
    const user = await prisma.employee.findUnique({
      where: {
        id: +userId,
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
    const { id, email, name } = user;
    const hours = user.doneWork[0].hours;
    const requiredHours = user.doneWork[0].department.requiredHours;
    const diffrence = hours - requiredHours;
    let res;
    if (diffrence < 0) {
      res = "kam kar kade";
    } else {
      res = "ziad kar karde";
    }
    response.json({
      id,
      email,
      name,
      hoursOfwork: [
        {
          hours,
          requiredHours,
          diffrence,
          res,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (request, response) => {
  try {
    const role = request.role;
    const { name, email } = request.body;
    if (role && role.length > 0 && role[0].name === "superadmin") {
      const user = await prisma.employee.create({
        data: {
          name: name,
          email: email,
        },
      });
      response.json({
        user,
      });
    } else {
      throw new Error("No Create User Just SuperAdmin");
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (request, response) => {
  try {
    const { email } = request.body;
    const user = await prisma.employee.findFirst({
      where: {
        email: email,
      },
      include: {
        roles: true,
      },
    });
    const role = user.roles;

    if (user.length === 0) {
      throw new Error("Not Found Email");
    }
    const token = jwt.sign({ name: user.name, role: role }, process.env.KEY);
    response.json({
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserHours,
  getUser,
  createUser,
  login,
};
