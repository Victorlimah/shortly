import chalk from "chalk";
import { urlsSchema } from "../schemas/urlsSchema.js";
import { getUrl } from "../repositories/urlsRepository.js";

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

export async function validateDelete(req, res, next){
  try {
    const { id } = req.params;
    if (!id) return res.status(422).send({ error: "Missing id" });

    const url = await getUrl("id", id);
    if(url.rowCount === 0) return res.status(404).send({ error: "Url not found" });

    const { userId } = url.rows[0];
    if(userId !== res.locals.user.id) return res.status(401).send({ error: "Access denied" });

    res.locals.id= url.rows[0].id;
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR VALIDATING DELETE: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
