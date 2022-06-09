import { Router } from "express";
import { getUserId } from "../controllers/userController.js";
import { verifyJWT } from "../utils/verifyJWT.js";

const userRouter = Router();

userRouter.get("/users/:id", verifyJWT, getUserId);

export default userRouter;