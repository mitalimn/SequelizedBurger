var mysql = require("mysql");
var Sequelize = require("sequelize");

var connection;


if(process.env.JAWSDB_URL){
  connection=mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = new Sequelize({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : "seq_burger_DB"
  })
}
module.exports = connection;
