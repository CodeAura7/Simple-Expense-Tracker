const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve index.html, script.js, style.css directly

// create expenses table if not exists
db.query(
  `CREATE TABLE IF NOT EXISTS expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255),
    amount DECIMAL(10,2),
    date DATE
  )`,
  (err) => {
    if (err) throw err;
    console.log("✅ Expenses table ready");
  }
);

// add expense
app.post("/add", (req, res) => {
  const { description, amount, date } = req.body;
  db.query(
    "INSERT INTO expenses (description, amount, date) VALUES (?, ?, ?)",
    [description, amount, date],
    (err) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

// fetch expenses
app.get("/expenses", (req, res) => {
  db.query("SELECT * FROM expenses ORDER BY date DESC", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});