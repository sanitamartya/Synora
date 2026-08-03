import pool from "../database/config/database.js";

export async function getHealth(req, res) {
  try {
    await pool.query("SELECT 1");

    return res.status(200).json({
      success: true,
      message: "Synora is healthy",
      database: "connected",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Database connection failed",
      database: "disconnected",
      error: error.message,
    });
  }
}
