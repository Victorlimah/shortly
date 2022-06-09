import { connection } from "./../data/db.js";

export function getUrlByUserId(id) {
    return connection.query(`SELECT * FROM urls WHERE "userId" = $1`, [id]);
}

export function insertUrl(originalUrl, shortUrl, userId) {
    return connection.query(`
    INSERT INTO urls ("originalUrl", "shortUrl", "userId")
    VALUES ($1, $2, $3)
    `, [originalUrl, shortUrl, userId]);
}