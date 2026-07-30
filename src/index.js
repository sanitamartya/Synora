const express = require("express");

const app = express();

const coreRoutes = require("./modules/core/routes");

app.use("/", coreRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
