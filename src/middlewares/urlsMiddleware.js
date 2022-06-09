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
