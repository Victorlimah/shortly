import chalk from "chalk";
import { urlsSchema } from "../schemas/urlsSchema.js";

export async function validateData(req, res, next) {
  try {
    const { error } = urlsSchema.validate(req.body);
    if (error) return res.status(422).send({ error: error.details[0].message });
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR VALIDATING DATA: ${err}`));
    res.status(500).send({ error: err.message });
  }
}

export async function validateGet(req, res, next) {
  try {
    const { id } = req.params;
    if (!id) return res.status(422).send({ error: "Missing id" });
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR VALIDATING GET: ${err}`));
    res.status(500).send({ error: err.message });
  }
}

export async function validateRedirect(req, res, next) {
  try {
    const { shortUrl } = req.params;
    if (!shortUrl) return res.status(422).send({ error: "Missing shortUrl" });
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR VALIDATING REDIRECT: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
