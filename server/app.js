const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

const PingRouter = require("./routes/ping-router");
const ProductRouter = require("./routes/product-router");
const BoardRouter = require("./routes/board-router");

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
app.use("/api/v1/boards", BoardRouter);

//PORT
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
