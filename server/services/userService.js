import User from "../models/User.js";
import bcrypt from "bcryptjs";
import APIFeatures from "../utils/apiFeatures.js";
import ActivityLog from "../models/ActivityLog.js";


export const createUser = async (data, currentUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const newUser = await User.create({
    ...data,
    password: hashedPassword,
    companyId: currentUser.companyId,
  });

  // 🔥 ADD LOG
  await ActivityLog.create({
    action: "CREATE_USER",
    userId: currentUser._id,
    companyId: currentUser.companyId,
  });

  return newUser;
};

export const getUsers = async (query, currentUser) => {
  const features = new APIFeatures(
    User.find({ companyId: currentUser.companyId }),
    query
  )
    .filter()
    .paginate();

  return await features.query;
};

export const getUserById = async (id, currentUser) => {
  return await User.findOne({
    _id: id,
    companyId: currentUser.companyId,
  });
};

export const updateUser = async (id, data, currentUser) => {
  return await User.findOneAndUpdate(
    { _id: id, companyId: currentUser.companyId },
    data,
    { new: true }
  );
};

export const deleteUser = async (id, currentUser) => {
  return await User.findOneAndDelete({
    _id: id,
    companyId: currentUser.companyId,
  });
};