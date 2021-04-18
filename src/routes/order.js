const express = require("express");
const router = express.Router();
const { orderController } = require("../controllers/order");

router.get("/:dealer_id", orderController().showByDealerId);
router.post("/", orderController().save);

module.exports = router;
