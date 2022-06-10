import chalk from "chalk";
import { nanoid } from "nanoid";
import { insertUrl, getUrl } from "../repositories/urlsRepository.js";
import { deleteUrl } from "../repositories/urlsRepository.js";

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

export async function redirectToUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const url = await getUrl("shortUrl", shortUrl);
    if(url.rowCount === 0) return res.status(404).send({ error: "Url not found" });

    const { originalUrl } = url.rows[0];
    res.redirect(originalUrl);
  } catch (err){
    console.log(chalk.red(`ERROR REDIRECTING TO URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}

export async function deleteShortUrl(req, res){
  const { id } = res.locals;
  try {
    await deleteUrl(id);
    res.status(204).send({ message: "Url deleted" });
  } catch (err) {
    console.log(chalk.red(`ERROR DELETING URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}