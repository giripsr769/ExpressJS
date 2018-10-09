
var express = require('express');
var app = express();
var http =require('http');
var path=require('path');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
var mysql=require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:"DB1"
   })
   //ADD 
app.post('/create', function(req,res){
    var createNames = {
        id: req.body.id,
        name: req.body.name,
        dept:req.body.dept,
        age:req.body.age
    }
    connection.query("insert into customers set ?",createNames, function(err, result){

        if(err)throw err;
        console.log(result);
        res.send('User saved successfully!');
        res.sendFile(__dirname + "/" +"home.html");
        
    })    
})
//Display 
app.post('/listUser', function(req,res){
connection.query("SELECT* FROM customers ",function(err, result){
     if(err)throw err;
     console.log(result);
     res.send(result);
     res.sendFile(__dirname + "/" +"home.html");
   
 })    
});
//By ID
app.post('/User', function(req,res){
    var id= req.body.id;
connection.query("SELECT* FROM customers WHERE id = ?",id, function(err, result){
     if(err)throw err;
     console.log(result);
     res.send(result);
     res.sendFile(__dirname + "/" +"home.html");
   
 })    
});
//Delete By ID
app.post('/delete', function(req,res){
    var id= req.body.id;
connection.query("DELETE FROM customers WHERE id = ?",id, function(err, result){
     if(err)throw err;
     console.log(result);
     res.send('User Deleted successfully!');
     res.sendFile(__dirname + "/" +"home.html");
   
 })    
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
  
  })