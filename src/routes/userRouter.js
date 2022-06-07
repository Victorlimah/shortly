import { Router } from "express";
import { getUserId } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/users/:id", getUserId );

export default userRouter;