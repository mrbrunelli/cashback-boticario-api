const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { verifyJWT } = require("./middlewares/auth");
const notFoundRouter = require("./routes/not-found");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const dealerRouter = require("./routes/dealer");
const orderRouter = require("./routes/order");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/login", loginRouter);
app.use("/dealer", dealerRouter);
app.use("/order", verifyJWT, orderRouter);
app.use("*", notFoundRouter);

module.exports = app;
