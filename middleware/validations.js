const {body}=require("express-validator")
const{validationResult}=require("express-validator")
const{validationError}=require("../errors")
const { min } = require("lodash")

exports.validationErrorHandler=(req,res,next)=>{
    const result= validationResult(req)

    if(!result.isEmpty()){
        const error= new validationError(
            result.array({onlyFirstError: true}),
            400,
        )
        return next(error)
    } next()
}


exports.createUserValidator =[
    body("userName")
     .notEmpty()
     .withMessage("userName is necessary and should not be emty")
     .isString()
     .trim(),
    body("password")
     .notEmpty()
     .withMessage("password is necessary and should not be emty")
     .isString()
     .trim()
     .isLength({min:4})
     .withMessage("the description should be more than 4 charactor")
     .isString()
     .trim(),
    body("due_date")
     .notEmpty()
     .withMessage("the due_date is necessary and should not be emty")
     .isString()
     .trim(),
    body("status")
     .notEmpty()
     .withMessage("status can not be emty")
     .isIn(["done","pending"])
     .withMessage("status should be just pending or done")
     .trim(),
]