const Pool = require('pg-pool')
const config = require('./utils/config')

const USER = config.USER
const PASSWORD = config.PASSWORD
const DATABASE = config.DATABASE
const HOST = config.HOST
const PGPORT = config.PGPORT

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  host: HOST,
  port: PGPORT
})

module.exports = pool