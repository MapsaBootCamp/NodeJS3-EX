const { logger } = require("../providers")

module.exports = (req, res, next) => {
  const date = new Date()
  loggerMessage = `${date.toISOString()} - path: ${req.url} - method: ${
    req.method
  }`
  logger.info(loggerMessage)
  next()
}
