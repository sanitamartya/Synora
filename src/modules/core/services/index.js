const { fetchHealthMessage } = require("../repositories");

function getHealthMessage() {
  const message = fetchHealthMessage();

  return message;
}

module.exports = {
  getHealthMessage,
};
