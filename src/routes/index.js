import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import urlsRouter from "./urlsRouter.js";

const router = Router();

router.use(userRouter);
router.use(authRouter);
router.use(urlsRouter);

export default router;
