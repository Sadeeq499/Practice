const Joi = require('joi');
// validationSchema at api point or middle point 
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

const userValidation = (data) =>{
    const schema =Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.userValidation =userValidation;