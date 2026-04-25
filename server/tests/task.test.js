import request from "supertest";
import app from "../app.js";
import { getAuthToken } from "./helper.js";

let token;
let projectId;
let taskId;

beforeAll(async () => {
  token = await getAuthToken();

  // Create project first
  const projectRes = await request(app)
    .post("/api/projects")
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Task Project",
    });

  projectId = projectRes.body.data._id;
});

describe("Task API", () => {
  it("should create task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Test Task",
        projectId,
      });

    expect(res.statusCode).toBe(201);
    taskId = res.body.data._id;
  });

  it("should get tasks", async () => {
    const res = await request(app)
      .get("/api/tasks")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  it("should update task", async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Updated Task",
      });

    expect(res.statusCode).toBe(200);
  });

  it("should delete task", async () => {
    const res = await request(app)
      .delete(`/api/tasks/${taskId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });

  // ❌ Edge case
  it("should fail with invalid projectId", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Invalid Task",
        projectId: "123",
      });

    expect(res.statusCode).toBe(400);
  });
});