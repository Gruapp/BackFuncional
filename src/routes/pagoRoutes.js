const express = require("express");
const router = express.Router();
const pagoController = require("../controllers/pagoController");

router.post("/pagar", pagoController.pagarPlan);
module.exports = router;
