import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema(
  {
    action: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  { timestamps: true }
);

export default mongoose.model("ActivityLog", activityLogSchema);