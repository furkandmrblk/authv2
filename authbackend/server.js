const express = require('express');
const cors = require('cors')
const createError = require('http-errors');
require('dotenv').config();
require('./helpers/init_mongodb')
require('./helpers/init_redis');

const authenticationRouter = require('./routes/authentication');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors())

app.use(express.json());

app.get('/', async (req, res, next) => {
    res.send('Home');
});

app.use('/user', authenticationRouter, postsRouter);

app.use(async (req, res, next) => {
    next(createError.NotFound())
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is up and running on port: ' + `${PORT}`);
});