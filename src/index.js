const express = require("express");

const app = express();

const coreRoutes = require("./modules/core/routes");

const errorHandler = require("./middleware/errorHandler");

const { logInfo } = require("./shared/logger");

app.use((req, res, next) => {
  logInfo(`Incoming ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/", coreRoutes);

app.use("/api", coreRoutes);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
