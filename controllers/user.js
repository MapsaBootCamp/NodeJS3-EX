const { users } = require("../data")
const _ = require("lodash")
const { logger } = require("../providers")
const client = require("../db")
const { cli } = require("winston/lib/winston/config")

module.exports = {
  userList: async (req, res) => {
    const users = await client.query("SELECT * FROM users;")
    res.json(users.rows)
    // res.json(users.map((user) => ({ id: user.id, name: user.userName })))
  },
  userDetial: async (req, res) => {
    const { userId } = req.params
    if (!Number.isInteger(+userId)) {
    }
    const user = await client.query(
      `SELECT user_id, userName, password, phoneNumber FROM users WHERE user_id = ${userId};`,
    )
    if (user.rows.length > 0) {
      res.json(user.rows)
    } else {
      return res.status(400).send("User id not found!")
    }

    // res.json(users.find((user) => user.id === +userId))
  },
  createUser: async (req, res, next) => {
    const newUser = { ...req.body }
    logger.info(`${JSON.stringify(_.omit(newUser, ["password"]))} created!`)
    const userExists = await client.query(
      `SELECT * FROM users WHERE userName = '${newUser.userName}';`,
    )
    // console.log(userExists)
    if (userExists.rows.length) {
      res.status(400).json({
        status: "error",
        message: "The user already exists!",
      })
    } else {
      let temp = `INSERT INTO users
    VALUES
      (((select max(user_id) from users) + 1),'${newUser.userName}','${newUser.password}','${newUser.phoneNumber}');`
      // (${newUser.id},'${newUser.userName}','${newUser.password}','${newUser.phoneNumber}');`
      // console.log(temp)
      // console.log("***********************************************")
      await client.query(temp)
      // console.log(test)

      temp = `select user_id from users where userName = '${newUser.userName}';`
      let t = await client.query(temp)
      newUser.user_id = t.rows[0].user_id
      res.status(201).json({
        status: "success",
        message: _.omit([newUser], ["password"]),
      })
    }
  },
  updateUser: async (req, res) => {
    const { userId } = req.params
    const { userName, phoneNumber } = req.body
    await client.query(`UPDATE users
	  SET userName ='${userName}', phoneNumber = '${phoneNumber}'
    WHERE user_id = ${userId};`)
    res.status(200).json({
      status: "successfully updated!",
    })
    // const user = users.find((user) => user.id === +userId)
    // if (!user) {
    //   return res.status(404).send("nadarim!")
    // }
    // for (const user of users) {
    //   if (user.id === +userId) {
    //     userName && (user.userName = userName)
    //     phoneNumber && (user.phoneNumber = phoneNumber)
    //     return res.status(200).json(user)
    //   }
    // }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.params
    await client.query(`delete from users where user_id = ${userId}`)
    logger.info(`the user by this Id ${JSON.stringify(userId)}deleted!`)
    res.status(204).json({
      status: "success",
      message: "successfully deleted!",
    })
  },
}
