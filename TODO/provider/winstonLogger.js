const winston = require("winston");
const {winstonConfig} = require('../config');

const logger = winston.createLogger(winstonConfig.configLogger);
logger.stream = {
    write : function(message) {
        logger.info(message)
    }
}
module.exports = logger;
