const { logError } = require("../shared/logger");

function errorHandler(err, req, res, next) {
  logError(err.message || "Internal Server Error");

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports = errorHandler;
