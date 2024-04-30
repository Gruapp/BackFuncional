const express = require("express");
const router = express.Router();
const planController = require("../controllers/planController");

router.get("/", planController.obtenerPlanes);
router.get("/:id", planController.obtenerPlanPorId);
module.exports = router;
