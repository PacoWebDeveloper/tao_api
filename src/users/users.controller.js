const Users = require('../models/user.model')
const uuid = require('uuid')

const { hashPassword } = require('../utils/crypto')

const userController = {

  createNewUser: async (userObj) => {
    const newUSer = {
      id: uuid.v4(),
      name: userObj.name,
      last_name: userObj.last_name,
      email: userObj.email,
      password: hashPassword(userObj.password),
      phone: userObj.phone
    }
  
    const data = await Users.create(newUSer)
    return data
  },

  findAllUsers: async () => {
    const data = await Users.findAll()
    return data
  }
}

module.exports = userController