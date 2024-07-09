import { Router } from "express";
import todoRoutes from "./todo";
import userRoutes from "./user";
const router = Router();

router.use("/users", userRoutes);
router.use("/todo", todoRoutes);

export default router;
