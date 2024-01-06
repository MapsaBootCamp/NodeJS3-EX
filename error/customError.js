module.exports = class CustomError extends Error {
    constructor(message, code) {
      super(message);
      this.message = message;
      this.code = code;
    }
  };