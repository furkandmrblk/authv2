const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const createError = require('http-errors');
const { registrationValidation, loginValidation } = require('../middlewares/validateUser');
const { createAccessToken, createRefreshToken, verifyRefreshToken } = require('../helpers/jwt_helper');
const client = require('../helpers/init_redis');

// Registration
router.post('/register', async (req, res, next) => {
    try {
        const result = await registrationValidation.validateAsync(req.body)

        const emailExists = await User.findOne({email: result.email})
        if(emailExists) throw createError.Conflict(`${result.email} has already been registered`)

        const user = new User(result)
        const savedUser = await user.save()

        res.send(savedUser)
    } catch (error) {
        if (error.isJoi === true) error.status = 422
        next(error)
    }
});

// Login
router.post('/login', async (req, res, next) => {
    try {
        const result = await loginValidation.validateAsync(req.body)

        const user = await User.findOne({email: result.email})
        if(!user) throw createError.NotFound('User not registered')

        const validPassword = await user.isValidPassword(result.password)
        if (!validPassword) throw createError.Unauthorized('Invalid username or password')

        const accessToken = await createAccessToken(user.id)
        const refreshToken = await createRefreshToken(user.id)

        res.send({ accessToken, refreshToken })

    } catch (error) {
        if (error.isJoi === true) return next(createError.BadRequest('Invalid username or password'))
        next(error)
    }
})

router.post('/refresh-token', async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()

        const userId = await verifyRefreshToken(refreshToken)

        const accessToken = await createAccessToken(userId)
        const refToken = await createRefreshToken(userId)
        res.send({ accessToken: accessToken, refreshToken: refToken })

    } catch (error) {
        next(error)
    }
})

router.post('/logout', async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
        
        client.DEL(userId, (err, value) => {
            if (err) {
                console.log(err.message)
                throw createError.InternalServerError()
            }
            console.log(value);
            res.sendStatus(204)
        })

    } catch (error) {
        next(error)
    }
})

module.exports = router;

// On the Client side I need to delete both the Access Token & the Refresh Token when the User logs out.