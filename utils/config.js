require('dotenv').config()

const USER = process.env.PGUSER
const PASSWORD = process.env.PGPASSWORD
const DATABASE = process.env.PGDATABASE
const PORT = process.env.PORT

module.exports = {
  USER,
  PASSWORD,
  DATABASE,
  PORT
}