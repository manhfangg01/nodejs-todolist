import { Router } from "express";
import taskRouter from "./taskRouter.js";

const router = Router();

router.use("/api", taskRouter);

export default router;
