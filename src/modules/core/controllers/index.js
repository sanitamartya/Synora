const { getHealthMessage } = require("../services");
const { createSuccessResponse } = require("../../../shared/utils");
const { logInfo } = require("../../../shared/logger");

function healthController(req, res) {
  logInfo(`Controller received ${req.method} ${req.originalUrl}`);
  const message = getHealthMessage();
  res.json(createSuccessResponse(message));
}

function getIncidentByIdController(req, res) {
  const { id } = req.params;

  logInfo(`Incident Route Parameter received: ${id}`);

  return res.json(
    createSuccessResponse({
      incidentId: id,
    }),
  );
}

module.exports = {
  healthController,
  getIncidentByIdController,
};
