const userController = require('./users.controller')
const responses = require('../utils/handleResponses')


const userServices = {
  test: (req, res) => {
    responses.success({
      res,
      status: 200,
      message: `Testing user services `
    })
  },
  postNewUser: (req, res) => {
    const userObj = req.body
    userController.createNewUser(userObj)
      .then(data => {
        responses.success({
          status: 201,
          data,
          message: `User created successfully with id: ${data.id}`,
          res
        })
      })
      .catch(err => {
        responses.error({
          status: 400,
          data: err,
          message: 'Error ocurrred trying to create a new user',
          res,
          fields: {
            name: 'String',
            last_name: 'String',
            email: 'example@example.com',
            password: 'String',
            phone: '+52 123 456 78 90'            
          }
        })
      })
  },

  getAllUsers: (req,res) => {
    userController.findAllUsers()
      .then(data => {
        responses.success({
          status: 200,
          data,
          message: 'Users retreived successfully',
          res
        })
      })
      .catch(err => {
        responses.error({
          status: 404,
          data: err,
          message: 'Users not found'
        })
      })
  }
}

module.exports = userServices