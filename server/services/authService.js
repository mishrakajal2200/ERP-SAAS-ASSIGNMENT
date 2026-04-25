import Company from "../models/Company.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "../utils/generateToken.js";

export const registerCompany = async (data) => {
  const { companyName, name, email, password } = data;

  const company = await Company.create({ name: companyName });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "admin",
    companyId: company._id,
  });

  return { company, user };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid credentials");

  const token = generateAccessToken({
    id: user._id,
    role: user.role,
    companyId: user.companyId,
  });

  return { token, user };
};

export const getMe = async (userId) => {
  return await User.findById(userId).select("-password");
};