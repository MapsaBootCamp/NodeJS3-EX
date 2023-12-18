
const { logger } = require("../providers");

module.exports = (req, res, next) => {
  const date = new Date();
  const logMessage = `${date.toISOString()} - path : ${(
    "path " + req.url
  )} - ${"method " + req.method}`;

  logger.info(logMessage);

  next();
};