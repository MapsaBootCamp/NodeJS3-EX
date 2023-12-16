const { body } = require("express-validator")
const { validationResult } = require("express-validator")
const { ValidationError } = require("../errors")

exports.validationErrorHandler = (req, res, next) => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    const error = new ValidationError(
      result.array({ onlyFirstError: true }),
      400,
    )
    return next(error)
  }
  next()
}

exports.createUserValidator = [
  body("userName")
    .notEmpty()
    .withMessage("userName is necessary and shouldn't be empty!")
    .isString()
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("password is necessary and shouldn't be empty!")
    .isString()
    .trim()
    .isLength({ min: 8 })
    .withMessage("password should be more than 8 characters!"),
  body("phoneNumber")
    .optional()
    .isString()
    .isLength({ min: 4 })
    .withMessage("phoneNumber should be more than 4 characters!")
    .trim(),
]

exports.createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("the title is necessary and shouldn't be empty!")
    .isString()
    .trim(),
  body("description")
    .notEmpty()
    .withMessage("the description is necessary and shouldn't be empty!")
    .isLength({ min: 4 })
    .withMessage("the description should be more than 4 characters!")
    .isString()
    .trim(),
  body("due_date")
    .notEmpty()
    .withMessage("the due_date is necessary and shouldn't be empty!")
    .isString()
    .trim(),
  body("status")
    .notEmpty()
    .withMessage("status can not be empty!")
    .isIn(["done", "pending"])
    .withMessage("status should be just pending or done")
    .trim(),
]
