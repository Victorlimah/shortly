import chalk from "chalk";
import bcrypt from "bcrypt";
import { stripHtml } from "string-strip-html";
import { userSchema } from "../schemas/userSchema.js";

export function validateData(req, res, next) {
    const { password, confirmPassword } = req.body;
    const { error } = userSchema.validate(req.body);

    if (error)
        return res.status(422).send({ error: error.details[0].message });

    if (password !== confirmPassword)
        return res.status(422).send({ error: "Passwords do not match" });

    next();
}

export async function sanitizeData(req, res, next) {
    let { name, email, password } = req.body;
    try{
        res.locals.name = stripHtml(name).result.trim();
        res.locals.email = stripHtml(email).result.trim();
        password = stripHtml(password).result.trim();
        res.locals.password = await bcrypt.hash(password, 10);
        next();
    } catch(err){
        console.log(chalk.red(`ERROR SANITIZING DATA: ${err}`));
        res.status(500).send({error: err.message});
    }
}
