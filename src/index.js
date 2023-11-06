const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routers/users");
const bookRouter = require("./routers/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT,
  API_URL,
  MONGO_URL = "mongodb://127.0.0.1:27017/mongo",
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = express();

//  middlewares
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

//  router
app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на: ${API_URL}:${PORT}`);
});
