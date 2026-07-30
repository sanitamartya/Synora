const { getHealthMessage } = require("../services");
const { createSuccessResponse } = require("../../../shared/utils");
const { logInfo } = require("../../../shared/logger");

function healthController(req, res) {
  logInfo("Health endpoint accessed");
  const message = getHealthMessage();
  res.json(createSuccessResponse(message));
}

module.exports = {
  healthController,
};
