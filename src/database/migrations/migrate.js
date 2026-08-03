import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import pool from "../index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function migrate() {
  try {
    const migration = await fs.readFile(
      path.join(__dirname, "001_initial_schema.sql"),
      "utf8",
    );

    await pool.query(migration);

    console.log("✅ Initial migration executed successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed");
    console.error(error);

    process.exit(1);
  }
}

migrate();
