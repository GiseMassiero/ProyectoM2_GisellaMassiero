const db = require("../../db/database");

exports.getAll = async () => {
  const result = await db.query("SELECT * FROM posts ORDER BY id");
  return result.rows;
};

exports.getById = async (id) => {
  const result = await db.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

exports.getByAuthor = async (authorId) => {
  const result = await db.query(
    `SELECT
      posts.id,
      posts.title,
      posts.content,
      posts.published,
      posts.created_at,
      authors.id AS author_id,
      authors.name,
      authors.email,
      authors.bio
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    WHERE authors.id = $1`,
    [authorId]
  );

  return result.rows;
};

exports.create = async ({ author_id, title, content, published }) => {
  if (!author_id || !title || !content) {
    const error = new Error("author_id, title and content are required");
    error.status = 400;
    throw error;
  }

  const result = await db.query(
    `INSERT INTO posts (author_id, title, content, published)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [author_id, title, content, published ?? false]
  );

  return result.rows[0];
};

exports.update = async (id, { title, content, published }) => {
  const current = await db.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );

  if (current.rows.length === 0) {
    const error = new Error("Post not found");
    error.status = 404;
    throw error;
  }

  const updated = {
    title: title ?? current.rows[0].title,
    content: content ?? current.rows[0].content,
    published: published ?? current.rows[0].published,
  };

  const result = await db.query(
    `UPDATE posts
     SET title = $1, content = $2, published = $3
     WHERE id = $4
     RETURNING *`,
    [updated.title, updated.content, updated.published, id]
  );

  return result.rows[0];
};

exports.remove = async (id) => {
  const result = await db.query(
    "DELETE FROM posts WHERE id = $1 RETURNING *",
    [id]
  );

  if (result.rows.length === 0) {
    const error = new Error("Post not found");
    error.status = 404;
    throw error;
  }

  return result.rows[0];
};