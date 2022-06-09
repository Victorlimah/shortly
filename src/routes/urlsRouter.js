import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { validateData } from "../middlewares/urlsMiddleware.js";
import { generateShortUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateData, generateShortUrl);

export default urlsRouter;