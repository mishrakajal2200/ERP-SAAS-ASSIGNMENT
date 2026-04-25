import request from "supertest";
import app from "../app.js";
import { getAuthToken } from "./helper.js";

let token;

beforeAll(async () => {
  token = await getAuthToken();
});

describe("User API", () => {
  it("should create user", async () => {
    const res = await request(app)
      .post("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "John",
        email: `john${Date.now()}@test.com`,
        password: "123456",
        role: "employee",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty("_id");
  });

  it("should get users", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  // ❌ Unauthorized test
  it("should fail without token", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(401);
  });
});