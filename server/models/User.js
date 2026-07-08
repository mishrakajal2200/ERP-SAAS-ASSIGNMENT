import mongoose from "mongoose";
import { ROLES } from "../constants/roles.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.EMPLOYEE,
    },

    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpire: {
      type: Date,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
