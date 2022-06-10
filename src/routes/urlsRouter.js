import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { validateData, validateGet, validateRedirect } from "../middlewares/urlsMiddleware.js";
import { generateShortUrl, redirectToUrl, returnUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateData, generateShortUrl);
urlsRouter.get("/urls/:id", validateGet, returnUrl);
urlsRouter.get("/urls/open/:shortUrl", validateRedirect, redirectToUrl); 

export default urlsRouter;