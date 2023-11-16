const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
dotenv.config();

const app = express();
app.use(bodyParser.json());

const PingRouter = require("./routes/PingRouter");
const ProductRouter = require("./routes/ProductRoute");

// mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//router
app.use("/api/v1", PingRouter);
app.use("/api/v1/products", ProductRouter);

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
