const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",     
  password: "",     // change if you set a password
  port: 3307,       // adjust if using default MySQL port (3306)
  database: "expense_tracker"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

module.exports = db;
