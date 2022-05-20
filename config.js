const mysql = require("mysql");

//database credential
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mobile_legend",
});

//integrating
db.connect((err) => {
  if (err) throw err;
  console.log("database connected....");
});

module.exports = db;
