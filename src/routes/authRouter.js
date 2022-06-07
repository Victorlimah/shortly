import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { sanitizeData, validateData } from "../middlewares/userMiddleware.js";

const authRouter = Router();

authRouter.post('/signup',validateData, sanitizeData, createUser )

export default authRouter;
