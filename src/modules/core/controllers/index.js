const { getHealthMessage } = require("../services");

const { createSuccessResponse } = require("../../../shared/utils");

function healthController(req, res) {
  const message = getHealthMessage();

  res.json(createSuccessResponse(message));
}

module.exports = {
  healthController,
};
