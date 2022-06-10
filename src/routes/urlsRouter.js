import { Router } from "express";
import { verifyJWT } from "../utils/verifyJWT.js";
import { urlsSchema } from "../schemas/urlsSchema.js";
import { validateSchemas } from "../middlewares/validateSchemas.js";
import { deleteShortUrl, generateShortUrl, redirectToUrl, returnUrl} from "../controllers/urlsController.js";
import { validateDelete, validateGet, validateRedirect } from "../middlewares/urlsMiddleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", verifyJWT, validateSchemas(urlsSchema), generateShortUrl);
urlsRouter.get("/urls/:id", validateGet, returnUrl);
urlsRouter.get("/urls/open/:shortUrl", validateRedirect, redirectToUrl); 
urlsRouter.delete("/urls/:id", verifyJWT, validateDelete, deleteShortUrl);

export default urlsRouter;