const router = require('express').Router()

const userServices = require('./users.services')
const passportJwt = require('../middleware/auth.middleware')

router.get('/test', userServices.test)
router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)
router.patch('/users/me', passportJwt, userServices.patchUser)
router.delete('/users/me', passportJwt, userServices.deleteUser)

module.exports = router