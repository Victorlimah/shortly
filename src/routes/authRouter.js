import { Router } from "express";
import { SignIn } from "../controllers/authController.js";
import { createUser } from "../controllers/userController.js";
import { sanitizeDataLogin, validateDataLogin } from "../middlewares/authMiddleware.js";
import { sanitizeData, validateData } from "../middlewares/userMiddleware.js";

const authRouter = Router();

authRouter.post('/signup',validateData, sanitizeData, createUser );
authRouter.post('/signin', validateDataLogin, sanitizeDataLogin, SignIn);

export default authRouter;
