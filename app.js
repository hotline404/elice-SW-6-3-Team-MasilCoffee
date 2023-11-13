const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MONGO_URL = process.env.MONGO_URL;
dotenv.config();

const app = express();

const PingRouter = require('./src/routes/PingRouter');

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

//router
app.use('/api/v1/ping', PingRouter);

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})