function createSuccessResponse(message) {
  return {
    success: true,
    message,
  };
}

module.exports = {
  createSuccessResponse,
};
