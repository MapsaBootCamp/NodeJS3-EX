const chalk = require("chalk");
const { logger } = require("../providers");

module.exports = (req, res, next) => {
  const date = new Date();
  const logMessage = `${chalk.green(date.toISOString())} - ${chalk.blue(
    "path " + req.url
  )} - ${chalk.red("method " + req.method)}`;

  logger.info(logMessage);

  next();
};
