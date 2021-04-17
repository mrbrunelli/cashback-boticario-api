const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const dealerRouter = require("./routes/dealer");
const loginRouter = require("./routes/login");
const { verifyJWT } = require("./middlewares/auth");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/dealer", verifyJWT, dealerRouter);
app.use("/login", loginRouter);

module.exports = app;
