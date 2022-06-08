import chalk from "chalk";
import bcrypt from "bcrypt";
import { stripHtml } from "string-strip-html";
import { loginSchema } from "../schemas/authSchema.js";

export function validateDataLogin(req, res, next) {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(422).send({ error: error.details[0].message });
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR VALIDATING DATA: ${err}`));
    res.status(500).send({ error: err.message });
  }
}


export async function sanitizeDataLogin(req, res, next) {
  let { email, password } = req.body;
  try {
    res.locals.email = stripHtml(email).result.trim();
    //TODO: Sanitize password -  is a correct way to do it?
    res.locals.password = stripHtml(password).result.trim();
    next();
  } catch (err) {
    console.log(chalk.red(`ERROR SANITIZING DATA: ${err}`));
    res.status(500).send({ error: err.message });
  }
}
