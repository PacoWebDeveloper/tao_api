const router = require('express').Router()

const userServices = require('./users.services')
const passportJwt = require('../middleware/auth.middleware')

router.get('/test', userServices.test)
router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)

module.exports = router