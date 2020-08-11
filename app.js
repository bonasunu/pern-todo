const express = require('express')
const app = express()
const todoRoutes = require('./controllers/todos')
const middleware = require('./utils/middleware')
require('express-async-errors')

app.use(express.json())
app.use('/api/todos', todoRoutes)

module.exports = app