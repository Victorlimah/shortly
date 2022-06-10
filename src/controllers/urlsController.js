import chalk from "chalk";
import { nanoid } from "nanoid";
import { insertUrl, getUrl } from "../repositories/urlsRepository.js";

export async function generateShortUrl(req, res) {
  try {
    const userId = res.locals.user.id;
    const shortUrl = nanoid(8);

    await insertUrl(req.body.url, shortUrl, userId);
    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log(chalk.red(`ERROR GENERATING SHORT URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}

export async function returnUrl(req, res) {
  const { id } = req.params;
  try {
    const url = await getUrl("id", id);
    if(url.rowCount === 0) return res.status(404).send({ error: "Url not found" });

    const { originalUrl, shortUrl } = url.rows[0];
    res.status(200).send({ id, shortUrl, originalUrl });
  } catch (err) {
    console.log(chalk.red(`ERROR RETURNING URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
