//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});
app.get("/about", function(req, res){
  res.send("Nothing to see here.");
});
app.get("/contact", function(req, res){
  res.send("You know where to find me.");
});
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
