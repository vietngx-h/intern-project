const express = require('express');
const path = require('node:path')

const app = express()

app.listen(3002,function(){
    console.log('Node server running @ http://localhost:3002  ')
});


app.use('/assets', express.static(path.join(__dirname, 'assets')))

const mysql = require('mysql2');
const con = mysql.createConnection({
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
    var sql = "SELECT * FROM tasks";
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/products', function (req, res) {
    const sql = "SELECT * FROM tasks";
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/product/:id', function (req, res){
    console.log("product id",req.params )
    const id = req.params.id
    const sql = `SELECT * FROM tasks WHERE id=${id}`;
    con.query(sql, function (err, results){
        if (err) throw err;
        console.log("result", results)
        const result = results[0]
        res.send(result);
    });
});

app.get('/location', function (req, res) {
    const sql = "SELECT * FROM location";
    con.query(sql, function(err, results) {
        if (err) throw err;
        res.send(results);
    });
});
