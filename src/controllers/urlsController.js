import chalk from "chalk";
import { nanoid } from "nanoid";

export async function generateShortUrl() {
  try {
    const shortUrl = nanoid(8);
    await insertUrl(shortUrl, userId);
    res.status(201).send({ shortUrl });
  } catch (err) {
    console.log(chalk.red(`ERROR GENERATING SHORT URL: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
