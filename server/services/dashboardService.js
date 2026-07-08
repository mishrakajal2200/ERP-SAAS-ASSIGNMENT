import ActivityLog from "../models/ActivityLog.js";
import Company from "../models/Company.js";
import Department from "../models/Department.js";
import Project from "../models/Project.js";
import Task from "../models/Task.js";
import User from "../models/User.js";
import { TASK_STATUS } from "../constants/status.js";

export const getDashboard = async (companyId) => {
    console.log("CompanyId:", companyId);

    const totalUsers = await User.countDocuments({ companyId });
    console.log("Users OK");

    const totalDepartments = await Department.countDocuments({ companyId });
    console.log("Departments OK");

    const totalProjects = await Project.countDocuments({ companyId });
    console.log("Projects OK");

    const totalTasks = await Task.countDocuments({ companyId });
    console.log("Tasks OK");

    const completedTasks = await Task.countDocuments({
  companyId,
  status: TASK_STATUS.DONE,
});

const pendingTasks = await Task.countDocuments({
  companyId,
  status: TASK_STATUS.TODO,
});

const inProgressTasks = await Task.countDocuments({
  companyId,
  status: TASK_STATUS.IN_PROGRESS,
});
    console.log("Completed Tasks OK");

    const recentProjects = await Project.find({ companyId })
  .populate("managerId", "name")
  .sort({ createdAt: -1 })
  .limit(5);
    console.log("Recent Projects OK");

    const recentTasks = await Task.find({ companyId })
        .sort({ createdAt: -1 })
        .limit(5);
    console.log("Recent Tasks OK");

    const recentActivities = await ActivityLog.find({ companyId })
        .sort({ createdAt: -1 })
        .limit(8);
    console.log("Activities OK");

    const company = await Company.findById(companyId);
    console.log("Company OK");

    return {
        stats: {
            totalUsers,
            totalDepartments,
            totalProjects,
            totalTasks,
            completedTasks,
            revenue: company?.revenue || 0,
        },
        taskDistribution: {
            completed: completedTasks,
            pending: pendingTasks,
            inProgress: inProgressTasks,
        },
        company,
        recentProjects,
        recentTasks,
        recentActivities
    };
};