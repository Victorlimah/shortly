import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { validateData } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateData)