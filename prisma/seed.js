const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Create roles
  const adminRole = await prisma.role.create({
    data: {
      name: 'admin',
    },
  })
  const superadminRole = await prisma.role.create({
    data: {
      name: 'superadmin',
    },
  })

  // Create departments
  const departments = []
  for (let i = 0; i < 10; i++) {
    const department = await prisma.department.create({
      data: {
        requiredHours: Math.floor(Math.random() * 100),
        name:`Department-${i+1}`
      },
    })
    departments.push(department)
  }

  // Create employees
  let roles;
  for (let i = 0; i < 10; i++) {
    if(i==1){
      roles = {
        connect: [
          {
            id: superadminRole.id,
          },
        ],
      }
    }
    const employee = await prisma.employee.create({
      data: {
        email: `employee${i}@example.com`,
        name: `Employee ${i}`,
        roles: roles,
        doneWork: {
          create: [
            {
              department: {
                connect:{
                  id:departments[i % 10].id
                }
              },
              hours: Math.floor(Math.random() * 100),
              month:'December'
            },
          ],
        },
      },
    })
    console.log(`Created new employee: ${employee.email} (ID: ${employee.id})`)
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })