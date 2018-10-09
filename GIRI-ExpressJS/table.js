var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DB1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers ( id int ,name VARCHAR(255), dept VARCHAR(255), age int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
