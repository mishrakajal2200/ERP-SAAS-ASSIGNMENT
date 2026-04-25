import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.js";

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, jwtConfig.accessTokenSecret, {
    expiresIn: jwtConfig.accessTokenExpiry,
  });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, jwtConfig.refreshTokenSecret, {
    expiresIn: jwtConfig.refreshTokenExpiry,
  });
};