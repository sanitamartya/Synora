import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export async function connectDatabase() {
  try {
    const client = await pool.connect();

    console.log("✅ PostgreSQL connected successfully");

    client.release();
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error.message);

    process.exit(1);
  }
}

export default pool;
