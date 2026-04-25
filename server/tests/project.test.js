import request from "supertest";
import app from "../app.js";
import { getAuthToken } from "./helper.js";

let token;
let projectId;

beforeAll(async () => {
  token = await getAuthToken();
});

describe("Project API", () => {
  it("should create project", async () => {
    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Test Project",
        description: "Testing project",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.data).toHaveProperty("_id");

    projectId = res.body.data._id;
  });

  it("should get projects", async () => {
    const res = await request(app)
      .get("/api/projects")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  it("should update project", async () => {
    const res = await request(app)
      .put(`/api/projects/${projectId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Updated Project",
      });

    expect(res.statusCode).toBe(200);
  });

  it("should delete project", async () => {
    const res = await request(app)
      .delete(`/api/projects/${projectId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  // ❌ Validation test
  it("should fail if name is missing", async () => {
    const res = await request(app)
      .post("/api/projects")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(res.statusCode).toBe(400);
  });
});