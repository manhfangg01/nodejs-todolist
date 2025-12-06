import { Router } from "express";
import taskRouter from "./taskRouter.js";

const router = Router();

router.use("/tasks", taskRouter);

export default router;
