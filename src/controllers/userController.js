import chalk from "chalk";
import { getUserById, newUser } from "../repositories/userRepository.js";
import { getUrlByUserId } from "../repositories/urlsRepository.js";

export async function getUserId(req, res) {   
    try{
        const result = await getUserById(req.params.id);
        if(result.rowCount === 0) return res.status(404).send({ message: "User not found" });

        const user = result.rows[0];
        const urls = await getUrlByUserId(user.id);

        res.status(200).send({...user, shortnedUrls: urls.rows});
    } catch(err){
        console.log(chalk.red(`ERROR GETTING USER ID: ${err}`));
        res.status(500).send({error: err.message});
    }
}

export async function createUser(_req, res) {
    const { name, email, password} = res.locals;
    try{
       await newUser(name, email, password);
        res.status(201).send({message: "User created successfully"});
    } catch(err){
        console.log(chalk.red(`ERROR CREATING USER: ${err}`));

        if(err.message.includes("duplicate key value violates unique constraint"))
            return res.status(409).send({error: "User already exists"});

        res.status(500).send({error: err.message});
    }
}
