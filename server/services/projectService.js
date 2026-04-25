import mongoose from "mongoose";
import Project from "../models/Project.js";
import APIFeatures from "../utils/apiFeatures.js";
import ActivityLog from "../models/ActivityLog.js";

// 🔥 Helper to ensure ObjectId
const toObjectId = (id) => {
  if (!id) return null;
  return typeof id === "string" ? new mongoose.Types.ObjectId(id) : id;
};

//  CREATE PROJECT
export const createProject = async (data, user) => {
  const project = await Project.create({
    ...data,
    companyId: toObjectId(user.companyId),
  });

  
  await ActivityLog.create({
    action: "CREATE_PROJECT",
    userId: user._id,
    companyId: user.companyId,
  });

  return project;
};

// ✅ GET PROJECTS
export const getProjects = async (query, user) => {
  const features = new APIFeatures(
    Project.find({
      companyId: toObjectId(user.companyId), // 🔥 FIX
    }),
    query
  )
    .filter()
    .paginate();

  return await features.query;
};

// ✅ UPDATE PROJECT
export const updateProject = async (id, data, user) => {
  return await Project.findOneAndUpdate(
    {
      _id: toObjectId(id),
      companyId: toObjectId(user.companyId), // 🔥 FIX
    },
    data,
    { new: true }
  );
};

// ✅ DELETE PROJECT
export const deleteProject = async (id, user) => {
  return await Project.findOneAndDelete({
    _id: toObjectId(id),
    companyId: toObjectId(user.companyId), // 🔥 FIX
  });
};