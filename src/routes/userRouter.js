import { Router } from "express";
import { getRanking, getUserId } from "../controllers/userController.js";
import { verifyJWT } from "../utils/verifyJWT.js";

const userRouter = Router();

userRouter.get("/users/:id", verifyJWT, getUserId);
userRouter.get("/ranking", getRanking);

export default userRouter;