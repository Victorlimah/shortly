import { Router } from "express";
import { userSchema } from "../schemas/userSchema.js";
import { loginSchema } from "../schemas/authSchema.js";
import { SignIn } from "../controllers/authController.js";
import { createUser } from "../controllers/userController.js";
import { validateSchemas } from "../middlewares/validateSchemas.js";
import { sanitizeDataLogin } from "../middlewares/authMiddleware.js";
import { sanitizeData, validateData } from "../middlewares/userMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', validateSchemas(userSchema), validateData, sanitizeData, createUser );
authRouter.post("/signin", validateSchemas(loginSchema), sanitizeDataLogin, SignIn);

export default authRouter;
