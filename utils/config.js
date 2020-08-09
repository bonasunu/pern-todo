require('dotenv').config()

const USER = process.env.PGUSER
const PASSWORD = process.env.PGPASSWORD
const DATABASE = process.env.PGDATABASE
const PORT = process.env.PORT
const HOST = process.env.PGHOST
const PGPORT = process.env.PGPORT

module.exports = {
  USER,
  PASSWORD,
  DATABASE,
  PORT,
  PGPORT,
  HOST
}