import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    revenue:{
        type:Number,
        default:0
    },
    subscription: {
      type: String,
      default: "Free",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);