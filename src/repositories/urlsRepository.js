import { connection } from "./../data/db.js";

export function getUrlByUserId(id) {
    return connection.query(`SELECT * FROM urls WHERE "userId" = $1`, [id]);
}