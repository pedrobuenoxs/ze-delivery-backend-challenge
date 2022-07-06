const express = require('express')
const router = require('../api/routes/routes')

const app = express()

app.use(express.json())

// TODO  = adicionar process.env aqui

app.use('/api', router)

module.exports = app
