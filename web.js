var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var str = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
