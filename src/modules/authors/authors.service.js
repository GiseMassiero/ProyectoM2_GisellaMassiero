const db = require("../../db/database");

exports.getAll = async () => {
  const result = await db.query("SELECT * FROM authors ORDER BY id");
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query(
    "SELECT * FROM authors WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

exports.create = async ({ name, email, bio }) => {
  if (!name || !email) {
    const error = new Error("Name and email are required");
    error.status = 400;
    throw error;
  }

  const exists = await db.query(
    "SELECT * FROM authors WHERE email = $1",
    [email]
  );

  if (exists.rows.length > 0) {
    const error = new Error("Email already exists");
    error.status = 400;
    throw error;
  }

  const result = await db.query(
    "INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *",
    [name, email, bio]
  );

  return result.rows[0];
};

exports.update = async (id, { name, email, bio }) => {
  const current = await db.query(
    "SELECT * FROM authors WHERE id = $1",
    [id]
  );

  if (current.rows.length === 0) {
    const error = new Error("Author not found");
    error.status = 404;
    throw error;
  }

  const updated = {
    name: name ?? current.rows[0].name,
    email: email ?? current.rows[0].email,
    bio: bio ?? current.rows[0].bio,
  };

  const result = await db.query(
    `UPDATE authors
     SET name = $1, email = $2, bio = $3
     WHERE id = $4
     RETURNING *`,
    [updated.name, updated.email, updated.bio, id]
  );

  return result.rows[0];
};

exports.remove = async (id) => {
  const result = await db.query(
    "DELETE FROM authors WHERE id = $1 RETURNING *",
    [id]
  );

  if (result.rows.length === 0) {
    const error = new Error("Author not found");
    error.status = 404;
    throw error;
  }

  return result.rows[0];
};