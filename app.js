const express = require('express')
require('express-async-errors')
const app = express()
const todoRoutes = require('./controllers/todos')
const middleware = require('./utils/middleware')

app.use(express.json())
app.use('/api/todos', todoRoutes)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app