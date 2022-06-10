import chalk from "chalk";
import { getUserUrl } from "../repositories/urlsRepository.js";
import { getUserById, getRankingBD, newUser } from "../repositories/userRepository.js";

export async function getUserId(req, res) {   
    try{
        // Check if user has a permission to access this route //
        const { id } = res.locals.user;
        if(id != req.params.id)
            return res.status(401).send({ error: "You can't access this user" });
        // /////////////////////////////////////////////////////////////// //

        const result = await getUserById(req.params.id);
        if(result.rowCount === 0) return res.status(404).send({ message: "User not found" });

        const user = result.rows[0];
        const urls = await getUserUrl("userId", user.id);

        let {visitCount} = user;
        visitCount = visitCount === null ? 0 : visitCount;

        res.status(200).send({...user,visitCount, shortnedUrls: urls.rows});
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

export async function getRanking(req, res) {
    try{
        const result = await getRankingBD(req.params.id);
        if(result.rowCount === 0) return res.status(404).send({ message: "User not found" });

        res.status(200).send(result.rows);
    } catch(err){
        console.log(chalk.red(`ERROR GETTING USER ID: ${err}`));
        res.status(500).send({error: err.message});
    }
}