const winston = require("winston");

const date = new Date();

module.exports = {
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service", createAt: date.toISOString() },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
};