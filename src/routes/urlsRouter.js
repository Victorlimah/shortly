import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { validateData, validateGet } from "../middlewares/urlsMiddleware.js";
import { generateShortUrl, returnUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateData, generateShortUrl);
urlsRouter.get("/urls/:id", validateGet, returnUrl);

export default urlsRouter;