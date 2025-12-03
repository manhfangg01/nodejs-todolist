import mongoose from "mongoose";
import { status } from "../constants/enum.js";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: status,
      default: "active",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // tự động thêm vào createdAt và UpdatedAt
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
