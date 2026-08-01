import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Synora Backend Running",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Synora is running on port ${PORT}`);
});
