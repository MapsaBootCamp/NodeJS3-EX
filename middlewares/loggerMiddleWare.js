const{logger} = require('../provider')

module.exports = (req , res , next) => {
    const logMassage = `${new Date()}-${req.url}-${req.method}`; 

    logger.info(logMassage)

    next()
}