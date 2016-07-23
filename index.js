var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public_html'));

app.get('/', function(req, res){
  res.sendFile("index.html");
});



app.listen(3000, function(){
  console.log("http://localhost:3000 is where the magic happens");
});
