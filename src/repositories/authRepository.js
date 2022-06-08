import { connection } from "./../data/db.js";

export function checkDataLogin(email) {
  return connection.query(`
    SELECT * FROM users WHERE email=$1
    `, [email]);
}

export function insertToken(userId, token) {
  return connection.query(`
    INSERT INTO sessions ("userId", token) VALUES ($1, $2)
    `, [userId, token]);
}