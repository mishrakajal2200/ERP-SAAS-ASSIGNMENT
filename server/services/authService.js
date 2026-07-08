import Company from "../models/Company.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
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

export const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  // Generate random token
  const resetToken = crypto
    .randomBytes(32)
    .toString("hex");

  // Hash token before saving
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Save hashed token in database
  user.resetPasswordToken = hashedToken;

  // Token valid for 10 minutes
  user.resetPasswordExpire =
    Date.now() + 10 * 60 * 1000;

  await user.save();

  const resetUrl =
    `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  // Temporary response for testing
  return {
    message: "Reset link generated successfully",
    resetToken,
    resetUrl,
  };
};

export const resetPassword = async (
  token,
  password
) => {

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  }).select("+password");

  if (!user) {
    throw new Error(
      "Invalid or expired reset token"
    );
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  user.password = hashedPassword;

  user.resetPasswordToken = undefined;

  user.resetPasswordExpire = undefined;

  await user.save();

  return {
    message:
      "Password reset successfully",
  };
};