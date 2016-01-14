var express = require("express");
var app = express();

var dateParser = require("./parser.js");
var port = process.env.PORT || 8080;

app.use(express.static("client"));

app.get("/:s",function(req,res){
  res.json(dateParser(req.params.s));
});

app.listen(port, function () {
  console.log('TimeStamp-microservice running on port ' + port);
});