import express, { response } from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getAllTasks);

taskRouter.post("/tasks", createTask);

taskRouter.put("/tasks/:id", updateTask);

taskRouter.delete("/tasks/:id", deleteTask);

export default taskRouter;
