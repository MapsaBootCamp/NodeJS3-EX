const winston = require("winston");

const date = new Date();

module.exports = {
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service", createAt: date.toISOString() },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
};
