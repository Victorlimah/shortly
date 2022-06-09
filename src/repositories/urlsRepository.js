import { connection } from "./../data/db.js";

export function getUrlByUserId(id) {
    return connection.query(`SELECT * FROM urls WHERE "userId" = $1`, [id]);
}

export function insertUrl(url, userId) {
    return connection.query(`INSERT INTO urls ("url", "userId") VALUES ($1, $2)`, [url, userId]);
}