require('dotenv').config()

const PORT = process.env.PORT
const TESTDB = process.env.TESTDB

module.exports = {
  PORT,
  TESTDB
}