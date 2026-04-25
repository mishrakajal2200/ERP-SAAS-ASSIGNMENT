import dotenv from "dotenv";
dotenv.config();

// 🔥 Validate required env variables
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing in environment variables");
}

if (!process.env.JWT_REFRESH_SECRET) {
  throw new Error("JWT_REFRESH_SECRET is missing in environment variables");
}

export const jwtConfig = {
  accessTokenSecret: process.env.JWT_SECRET,
  accessTokenExpiry: process.env.JWT_EXPIRE || "15m", 

  refreshTokenSecret: process.env.JWT_REFRESH_SECRET,
  refreshTokenExpiry: process.env.JWT_REFRESH_EXPIRE || "7d", 
};