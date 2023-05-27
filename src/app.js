const express = require('express')
const config = require('../config')
const { api } = config
const host = api.host
const port = api.port

const db = require('./utils/database')
const initModels = require('./models/initModels')

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
    res.status(200).send('Welcome to TAOs API')
})

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})