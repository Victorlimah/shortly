import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { getRanking, getUserId } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/ranking", getRanking);
userRouter.get("/users/:id", verifyJWT, getUserId);

export default userRouter;
