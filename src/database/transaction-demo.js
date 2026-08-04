import pool from "./index.js";

async function transactionDemo() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const userResult = await client.query(
      `
      INSERT INTO users (name, email)
      VALUES ($1, $2)
      RETURNING id;
      `,
      ["Transaction Demo", "transaction@example.com"],
    );

    const userId = userResult.rows[0].id;

    await client.query(
      `
      INSERT INTO projects (title, description, owner_id)
      VALUES ($1, $2, $3);
      `,
      ["My First Project", "Created inside a transaction", userId],
    );

    await client.query("COMMIT");

    console.log("✅ Transaction committed successfully");
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("❌ Transaction rolled back");
    console.error(error.message);
  } finally {
    client.release();
  }
}

transactionDemo();
