  import { connection } from "./../data/db.js";

export function getUserById(id) {
  return connection.query(`
    SELECT 
      users.id,
      users.name,
      SUM(urls."visitCount") as "visitCount"
    FROM users 
      LEFT JOIN urls ON urls."userId"=users.id
    WHERE users.id=$1
    GROUP BY users.id
    `, [id]
  );
}

export function newUser(name, email, password) {
      return connection.query(`
    INSERT INTO 
      users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [name, email, password]
  );
}

export function getRankingBD() {
  return connection.query(`
    SELECT 
      users.id, users.name,
      COUNT(urls) as "linkCount",
      SUM(urls."visitCount") as "visitCount"
    FROM users
      LEFT JOIN urls ON urls."userId"=users.id
    GROUP BY users.id
    ORDER BY "linkCount" DESC LIMIT 10
  `);
}
