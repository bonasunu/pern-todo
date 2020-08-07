const express = require('express')
const app = express()
const pool = require('./db')

app.use(express.json())



app.listen(8000, () => {
  console.log('App listening on port 8000')
})