var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var jwt = require('jwt-simple');
var mongoose = require('mongoose');
var User = require('./models/user.js');

console.log(config);
var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public_html'));
app.set('secret', config.secret);
mongoose.connect(config.dsn);
app.get('/', function(req, res){
  res.sendFile("index.html");
});

app.get('/setup', function(req, res){
  var user = new User({
    username:'mohd',
    password: 'testing', 
    panels: [[]]
  });
  user.save(function(err){
    if(err) throw err;
    res.sendStatus(201);
  });
});
app.listen(3000, function(){
  console.log("http://localhost:3000 is where the magic happens");
});
