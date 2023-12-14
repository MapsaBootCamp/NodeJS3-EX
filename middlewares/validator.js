const { body } = require("express-validator");
const { validationError } = require("../error");
const { validationResult } = require("express-validator");

exports.validationErrorHandler = (req , res , next) => {
  const result = validationResult(req);

    if (!result.isEmpty()) {
      const Error = new validationError(
        result.array({ onlyfirsterror: true }),
        400
      );
      return next(Error);
    }
    next()
}

exports.createUserValidator = [
  body("userName")
    .notEmpty()
    .withMessage("userName cant be empty!")
    .isString()
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("its cant be empty!")
    .isString()
    .trim()
    .isLength({ min: 8 })
    .withMessage("min char 8") 
];
