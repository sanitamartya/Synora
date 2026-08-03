import pool from "../index.js";

class UserRepository {
  async findAll() {
    const result = await pool.query(`
      SELECT *
      FROM users
      ORDER BY id;
    `);

    return result.rows;
  }
}

export default new UserRepository();
