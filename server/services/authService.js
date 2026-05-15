import Company from "../models/Company.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/generateToken.js";

export const registerCompany = async (data) => {
  const { companyName, name, email, password } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    const error = new Error("Email already exists");
    error.statusCode = 400;
    throw error;
  }

  // CREATE COMPANY
  const company = await Company.create({
    name: companyName,
  });

  // HASH PASSWORD
  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  // CREATE USER
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "admin",
    companyId: company._id,
  });

  // REMOVE PASSWORD
  const userObj = user.toObject();

  delete userObj.password;

  return {
    company,
    user: userObj,
  };
};

// export const login = async ({ email, password }) => {

//   const user = await User.findOne({ email })
//     .select("+password");

//   console.log("USER:", user);

//   if (!user) {
//     throw new Error("Invalid credentials");
//   }

//   console.log("PASSWORD FROM BODY:", password);
//   console.log("PASSWORD FROM DB:", user.password);

//   const isMatch = await bcrypt.compare(
//     password,
//     user.password
//   );

//   if (!isMatch) {
//     throw new Error("Invalid credentials");
//   }

//   const token = generateAccessToken({
//     id: user._id,
//     role: user.role,
//     companyId: user.companyId,
//   });

//   const userObj = user.toObject();

//   delete userObj.password;

//   return {
//     token,
//     user: userObj,
//   };
// };

export const login = async ({ email, password }) => {

  console.log("EMAIL:", email);
  console.log("PASSWORD:", password);

  const user = await User.findOne({ email })
    .select("+password");

  console.log("USER FOUND:", user);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  console.log("DB PASSWORD:", user.password);

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  console.log("PASSWORD MATCH:", isMatch);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateAccessToken({
    id: user._id,
    role: user.role,
    companyId: user.companyId,
  });

  const userObj = user.toObject();

  delete userObj.password;

  return {
    token,
    user: userObj,
  };
};

export const getMe = async (userId) => {
  return await User.findById(userId).select("-password");
};