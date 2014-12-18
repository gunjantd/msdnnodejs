var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('p Welcome to #{title} with WebMatrix on Azure! Hello World\n FROM WTS Dev Services');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');