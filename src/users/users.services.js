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
        if (data.length > 0)
          responses.success({
            status: 200,
            data,
            message: 'Users retreived successfully',
            res
          })
        else
          responses.error({
            res,
            status: 404,
            message: 'No users found'
          })
      })
      .catch(err => {
        responses.error({
          status: 404,
          data: err,
          message: 'Users not found'
        })
      })
  },

  patchUser: (req, res) => {
    const id = req.query.id
    const userObj = req.body
    userController.editUser(id, userObj)
      .then(data => {
        responses.success({
          res,
          status: 200,
          message: 'User updated successfully',
          data
        })
      })
      .catch(err => {
        responses.error({
          res, 
          status: 304,
          data: err
        })
      })
  },

  deleteUser: (req, res) => {
    const id = req.query.id
    userController.deleteUser(id)
      .then(data => {
        responses.success({
        res,
        status: 200,
        message: 'User deleted successfully'
      })
      })
  }
}

module.exports = userServices