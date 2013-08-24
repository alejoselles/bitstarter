var express = require('express');
var app = express();

var fs = require('fs');

//----------------------------
// var buffer = new Buffer( 100);
var buffer = new Buffer( 'Toma con el buffer', 'utf-8' );
 
// buffer.write( fs.readFileSync('index.html') );

//----------------------------/


app.use(express.logger());

app.get('/', function(request, response) {
//  response.send( fs.readFileSync('index.html','utf8') );
response.send( buffer.toString('utf-8',0,18) );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
