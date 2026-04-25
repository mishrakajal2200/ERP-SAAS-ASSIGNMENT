import Task from "../models/Task.js";
import APIFeatures from "../utils/apiFeatures.js";
import ActivityLog from "../models/ActivityLog.js";


export const createTask = async (data, user) => {
  const task = await Task.create({
    ...data,
    companyId: user.companyId,
  });

  
  await ActivityLog.create({
    action: "CREATE_TASK",
    userId: user._id,
    companyId: user.companyId,
  });

  return task;
};

export const getTasks = async (query, user) => {
  const features = new APIFeatures(
    Task.find({ companyId: user.companyId }),
    query
  )
    .filter()
    .paginate();

  return await features.query;
};

export const updateTask = async (id, data, user) => {
  return await Task.findOneAndUpdate(
    { _id: id, companyId: user.companyId },
    data,
    { new: true }
  );
};

export const deleteTask = async (id, user) => {
  return await Task.findOneAndDelete({
    _id: id,
    companyId: user.companyId,
  });
};