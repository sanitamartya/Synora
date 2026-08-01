const express = require("express");

const router = express.Router();

const {
  healthController,
  getIncidentByIdController,
} = require("../controllers");

router.get("/", healthController);

router.get("/incidents", healthController);

router.get("/incidents/:id", getIncidentByIdController);

router.get("/error", (req, res, next) => {
  next(new Error("Test Error"));
});

module.exports = router;
