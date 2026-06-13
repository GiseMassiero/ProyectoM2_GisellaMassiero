const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db/database");

let createdId;

describe("AUTHORS API", () => {

  test("GET /authors debe responder 200", async () => {
    const res = await request(app).get("/authors");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /authors debe crear un author", async () => {
    const res = await request(app)
      .post("/authors")
      .send({
        name: "Test Author",
        email: `test_${Date.now()}@email.com`,
        bio: "bio test"
      });

    console.log("create author:", res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    createdId = res.body.id;
  });

  test("GET /authors/:id debe devolver un author", async () => {
    expect(createdId).toBeDefined(); 

    const res = await request(app).get(`/authors/${createdId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", createdId);
  });

  test("PUT /authors/:id debe actualizar", async () => {
    expect(createdId).toBeDefined();

    const res = await request(app)
      .put(`/authors/${createdId}`)
      .send({
        name: "Updated Name",
        email: `updated_${Date.now()}@email.com`,
        bio: "updated bio"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name", "Updated Name");
  });

  test("DELETE /authors/:id debe eliminar un author", async () => {
    expect(createdId).toBeDefined();

    const res = await request(app).delete(`/authors/${createdId}`);

    expect(res.statusCode).toBe(204);
  });

  test("GET author inexistente debe devolver 404", async () => {
    const res = await request(app).get("/authors/999999999");

    expect(res.statusCode).toBe(404);
  });

  test("POST sin datos debe fallar", async () => {
    const res = await request(app)
      .post("/authors")
      .send({});

    expect(res.statusCode).toBe(400);
  });

});

afterAll(async () => {
  await pool.end();
})