module.exports = class validationError extends Error {
    constructor(massage, statusCode){
        super(massage);
        this.massage = massage;
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}