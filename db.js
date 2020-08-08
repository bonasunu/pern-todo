const Pool = require('pg-pool')
const config = require('./utils/config')

const USER = config.USER
const PASSWORD = config.PASSWORD
const DATABSE = config.DATABASE

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  database: DATABSE,
  host: 'localhost',
  port: 5432
})

module.exports = pool