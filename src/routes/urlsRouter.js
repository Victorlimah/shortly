import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { deleteShortUrl, generateShortUrl, redirectToUrl, returnUrl} from "../controllers/urlsController.js";
import { validateData, validateDelete, validateGet, validateRedirect } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateData, generateShortUrl);
urlsRouter.get("/urls/:id", validateGet, returnUrl);
urlsRouter.get("/urls/open/:shortUrl", validateRedirect, redirectToUrl); 
urlsRouter.delete("/urls/:id", verifyJWT, validateDelete, deleteShortUrl);

export default urlsRouter;