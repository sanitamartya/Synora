import pool from "../index.js";

class UserRepository {
  async create({ name, email }) {
    const result = await pool.query(
      `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING *;
      `,
      [name, email],
    );

    return result.rows[0];
  }

  async findAll() {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      ORDER BY id;
      `,
    );

    return result.rows;
  }

  async findById(id) {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE id = $1;
      `,
      [id],
    );

    return result.rows[0];
  }

  async findByEmail(email) {
    const result = await pool.query(
      `
      SELECT *
      FROM users
      WHERE email = $1;
      `,
      [email],
    );

    return result.rows[0];
  }

  async update(id, { name, email }) {
    const result = await pool.query(
      `
      UPDATE users
      SET
        name = $1,
        email = $2
      WHERE id = $3
      RETURNING *;
      `,
      [name, email, id],
    );

    return result.rows[0];
  }

  async delete(id) {
    const result = await pool.query(
      `
      DELETE FROM users
      WHERE id = $1
      RETURNING *;
      `,
      [id],
    );

    return result.rows[0];
  }
}

export default new UserRepository();
