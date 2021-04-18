const express = require("express");
const router = express.Router();
const { dealerController } = require("../controllers/dealer");
const { verifyJWT } = require("../middlewares/auth");

router.get("/", verifyJWT, dealerController().index);
router.get("/:id", verifyJWT, dealerController().show);
router.post("/", dealerController().save);

module.exports = router;
