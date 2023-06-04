const checkUserCredentials =  require('./auth.controller')
const resposes = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')
const config = require('../../config').api

const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
        .then(data => {
            if (data) {
                const token = jwt.sign({
                    id: data.id,
                    name: data.name,
                    email: data.email
                }, config.secretOrKey, {
                    expiresIn: '1d'
                })

                resposes.success({
                    res,
                    status: 200,
                    message: 'Correct credentials',
                    data: token
                })
            }
            else    
                resposes.error({
                    res,
                    status: 401,
                    message: 'Wrong credentials'
                })
        })
        .catch(err => {
            resposes.error({
                res,
                status: 400,
                message: 'Something went wrong',
                data: err
            })
        })
}

module.exports = postLogin