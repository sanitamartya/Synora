import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

import { connectDatabase } from "./database/index.js";

import routes from "./routes/index.js";

app.use(routes);

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`🚀 Synora running on port ${PORT}`);
  });
}

startServer();
