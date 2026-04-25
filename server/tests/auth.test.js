import request from "supertest";
import app from "../app.js";

describe("Auth API", () => {
  const email = `admin${Date.now()}@test.com`;

  it("should register a company", async () => {
    const res = await request(app)
      .post("/api/auth/register-company")
      .send({
        companyName: "Test Co",
        name: "Admin",
        email,
        password: "123456",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should login user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email,
        password: "123456",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.token).toBeDefined();
  });

  // ❌ Negative test
  it("should fail with wrong password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email,
        password: "wrongpassword",
      });

    expect(res.statusCode).toBe(401);
  });
});