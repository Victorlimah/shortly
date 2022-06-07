import { connection } from "./../data/db.js";

export function getUserById(id) {
  return connection.query(
    `
    SELECT 
        users.*,
        SUM(urls."visitCount") as "visitCount"
    FROM users 
        LEFT JOIN urls ON urls."userId"=users.id
    WHERE users.id=$1
    GROUP BY users.id`,
    [id]
  );
}
