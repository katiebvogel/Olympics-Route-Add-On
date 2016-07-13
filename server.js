var express = require('express');
//requirements are below
var index = require('./routes/index');
var olympics = require('./routes/olympics');
//variables
var app = express();

//static files
app.use(express.static('public'));


//Routers
app.use('/', index);
app.use('/olympics', olympics);


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
