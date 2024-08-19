var express = require('express');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "nodejs"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!")
});

app.get('/home.html', function (req, res) {
    // var sql = "SELECT * FROM tasks";
    var sql = "SELECT * FROM ratings";
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/products', function (req, res) {
    var sql = "SELECT * FROM ratings";
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
});
