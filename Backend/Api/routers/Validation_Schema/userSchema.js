const Joi = require('joi');

const validateUser = (user) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    

    const validation = schema.validate(user);
    return validation;
   
}
module.exports = validateUser;
// if more then one function is exported then use this syntax:
// module.exports = {
//     validateUser1,
//     validateUser2,
//     validateUser3
// }
