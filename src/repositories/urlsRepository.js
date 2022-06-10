import { connection } from "./../data/db.js";

export function getUrl(param, value) {
  return connection.query(`SELECT * FROM urls WHERE "${param}" = $1`, [value]);
}

export function insertUrl(originalUrl, shortUrl, userId) {
    return connection.query(`
    INSERT INTO urls ("originalUrl", "shortUrl", "userId")
    VALUES ($1, $2, $3)
    `, [originalUrl, shortUrl, userId]);
}

export function deleteUrl(param, value) {
  return connection.query(`DELETE FROM urls WHERE "${param}" = $1`, [value]);
}

export function addVisitCount(param, value) {
  return connection.query(`UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "${param}" = $1`, [value]);
}