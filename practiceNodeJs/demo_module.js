var http = require('http');
var dt = require('./myfirstmodule')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Current Date and Time is:"+dt.currentDate());
  res.end('Thanks for visiting us!');
}).listen(8080);