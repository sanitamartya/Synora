const express = require("express");

const app = express();

const coreRoutes = require("./modules/core/routes");

const errorHandler = require("./middleware/errorHandler");

app.use("/", coreRoutes);

app.use("/api", coreRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
