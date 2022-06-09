import chalk from "chalk";
import { nanoid } from "nanoid";
import { insertUrl } from "../repositories/urlsRepository.js";
import jwt from "jsonwebtoken"


export async function generateShortUrl(req, res) {
  try {
      let token = req.headers.authorization.replace("Bearer ", "");

      const userId = res.locals.user.id

    const shortUrl = nanoid(8);
    await insertUrl(req.body.url, shortUrl, userId);
    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log(chalk.red(`ERROR GENERATING SHORT URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
