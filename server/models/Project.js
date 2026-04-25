import mongoose from "mongoose";
import { PROJECT_STATUS } from "../constants/status.js";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,

    status: {
      type: String,
      enum: Object.values(PROJECT_STATUS),
      default: PROJECT_STATUS.ACTIVE,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);