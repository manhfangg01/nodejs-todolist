import express, { response } from "express";
import { getAllTasks, createTask, updateTask, deleteTask, test } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks, test, test); //...handlers

taskRouter.post("/", createTask);

taskRouter.put("/", updateTask);

taskRouter.delete("/:id", deleteTask);

export default taskRouter;
