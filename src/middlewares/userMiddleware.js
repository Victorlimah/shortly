import chalk from "chalk";
import bcrypt from "bcrypt";
import { stripHtml } from "string-strip-html";

export function validateData(req, res, next) {
  try {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword)
      return res.status(422).send({ error: "Passwords do not match" });
    next();
  } catch (error) {
    console.log(chalk.red(`ERROR VALIDATE DATA: ${err}`));
    res.status(500).send({ error: err.message });
  }
}

export async function sanitizeData(req, res, next) {
    let { name, email, password } = req.body;
    try{
        res.locals.name = stripHtml(name).result.trim();
        res.locals.email = stripHtml(email).result.trim();
        password = stripHtml(password).result.trim();
        res.locals.password = bcrypt.hashSync(password, 10);
        next();
    } catch(err){
        console.log(chalk.red(`ERROR SANITIZING DATA: ${err}`));
        res.status(500).send({error: err.message});
    }
}
