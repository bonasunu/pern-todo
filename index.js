const app = require('./app')
const https = require('https')
const config = require('./utils/config')
const logger = require('./utils/logger')
const fs = require('fs')

const port = config.PORT || 3000

const option = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}
const server = https.createServer(option, app)

server.listen(port, () => {
  logger.info(`App listening on port ${port}`)
})
