module.exports = class validationError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.name = this.constructor.name
  }
}
