const express = require("express");
const router = express.Router();
const { dealerController } = require("../controllers/dealer");

router.get("/", dealerController().index);
router.post("/", dealerController().save);

module.exports = router;
