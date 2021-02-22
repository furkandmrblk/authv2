const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_DB_URI, {
        dbName: process.env.MONGO_DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to DB');
    })

    mongoose.connection.on('error', (err) => {
        console.log(err.message);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    })

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0)
    })