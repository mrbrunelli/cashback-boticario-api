const express = require("express");
const router = express.Router();
const { notFound } = require("../helpers/http");

router.get("/", (req, res) => {
  return notFound(res);
});

module.exports = router;
