import pool from "../database/index.js";
import UserRepository from "../database/repositories/UserRepository.js";

export async function getHealth(req, res) {
  // try {
  //   const result = await pool.query(`
  //     SELECT
  //       current_database() AS database,
  //       current_user AS user,
  //       version() AS version,
  //       NOW() AS server_time;
  //   `);
  //   console.log(result);
  //   return res.status(200).json({
  //     success: true,
  //     message: "Database connectivity verified",
  //     data: result.rows[0],
  //   });
  // } catch (error) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Database connectivity failed",
  //     error: error.message,
  //   });
  // }

  try {
    const users = await UserRepository.findAll();

    return res.json({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
