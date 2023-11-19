const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const PingRouter = require("./routes/PingRouter");
const ProductRouter = require("./routes/ProductRoute");
const BoardRouter = require("./routes/BoardRoute");

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
