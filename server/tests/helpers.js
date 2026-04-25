

import request from "supertest";
import app from "../app.js";

export const getAuthToken = async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({
      email: "admin@test.com",
      password: "123456",
    });

  return res.body.data.token;
};