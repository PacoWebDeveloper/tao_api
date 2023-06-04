const express = require('express')
const config = require('../config')
const { api } = config
const host = api.host
const port = api.port
const baseUrl = '/api/v1'

const db = require('./utils/database')
const initModels = require('./models/initModels')

const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const responses = require('./utils/handleResponses')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Connection with database stablished sucessfully')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database synced sucessfully')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get('/', (req, res) => {
    responses.success({
        res,
        status: 200,
        message: `Welocome to TAO API developed by Francisco Ortiz (pacoortiz16@hotmail.com). Please use this url to see available end points: http://${host}:${port}/api/v1/api-docs`
    })
})

app.use(baseUrl, usersRouter)
app.use(baseUrl, authRouter)

app.get('*', (req, res) => {
    responses.error({
        res,
        status: 404,
        message: 'The URL requested, does not exist'
    })
})

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})