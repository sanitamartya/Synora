const { getHealthMessage } = require("../services");

function healthController(req, res) {
  const message = getHealthMessage();

  res.send(message);
}

module.exports = {
  healthController,
};
