export function getHealth(req, res) {
  return res.status(200).json({
    success: true,
    status: "UP",
    service: "Synora",
    message: "API is healthy",
  });
}
