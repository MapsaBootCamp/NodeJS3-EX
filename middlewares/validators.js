const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const { ValidationError } = require("../errors");

exports.validationErrorHandler = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    const error = new ValidationError(
      result.array({ onlyFirstError: true }),
      400
    );
    return next(error);
  }
  next();
};

exports.createUserValidator = [
  body("userName")
    .notEmpty()
    .withMessage("userName ejbari va gheir khali")
    .isString()
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("ejbari ast va bedoon khali budan")
    .isString()
    .trim()
    .isLength({ min: 8 })
    .withMessage("hadeaghal 8 ta"),
  body("phoneNumber").optional().isString().isLength({ min: 11 }).trim(),
];
