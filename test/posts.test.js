const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/database");

let authorId;
let postId;

describe("POSTS API", () => {

  test("crear author base", async () => {
    const res = await request(app)
      .post("/authors")
      .send({
        name: "Test Author",
        email: `test_${Date.now()}@email.com`,
        bio: "bio test"
      });

    console.log("author response:", res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    authorId = res.body.id;
  });

  test("POST /posts crea post", async () => {
    expect(authorId).toBeDefined(); // 👈 evita errores silenciosos

    const res = await request(app)
      .post("/posts")
      .send({
        title: "Test post",
        content: "contenido de prueba",
        author_id: authorId,
        published: true
      });

    console.log("post response:", res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    postId = res.body.id;
  });

  test("GET /posts/:id", async () => {
    expect(postId).toBeDefined();

    const res = await request(app).get(`/posts/${postId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", postId);
  });

  test("GET /posts/author/:authorId", async () => {
    expect(authorId).toBeDefined();

    const res = await request(app).get(`/posts/author/${authorId}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("PUT /posts/:id", async () => {
    expect(postId).toBeDefined();

    const res = await request(app)
      .put(`/posts/${postId}`)
      .send({
        author_id: authorId,
        title: "post actualizado",
        content: "contenido actualizado",
        published: true
      });

    console.log("update response:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("post actualizado");
  });

  test("DELETE /posts/:id", async () => {
    expect(postId).toBeDefined();

    const res = await request(app).delete(`/posts/${postId}`);

    expect(res.statusCode).toBe(204);
  });


});

 afterAll(async () => {
  await pool.end();
});