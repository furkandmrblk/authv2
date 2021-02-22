const Joi = require('joi');

// Registration validation

const registrationValidation = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).email().lowercase().required(),
    password: Joi.string().min(6).required(),
})

const loginValidation = Joi.object({
    email: Joi.string().min(6).max(255).email().lowercase().required(),
    password: Joi.string().min(6).required(),
})

module.exports = {
    registrationValidation,
    loginValidation
}
