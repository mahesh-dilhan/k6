import sql from 'k6/x/sql';

// The second argument is a MySQL connection string, e.g.
// myuser:mypass@tcp(127.0.0.1:3306)/mydb
const db = sql.open('mysql', '');

export function setup() {
  
}

export function teardown() {
  db.close();
}

export default function () {
  let results = sql.query(db, "SELECT 1;", 'k6-plugin-sql');
  
}
