import User from "../models/User.js";

export const searchData = async (
  query,
  companyId
) => {

  const users = await User.find({
    companyId,

    $or: [
      {
        name: {
          $regex: query,
          $options: "i",
        },
      },

      {
        email: {
          $regex: query,
          $options: "i",
        },
      },
    ],
  }).select("name email role");

  return users.map((user) => ({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    type: "User",
  }));
};