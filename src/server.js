var http = require('http');
var router = require('./router');
var port = 3000;

var server = http.createServer(router);
server.listen(port);
console.log('Srever is working in your port '+port);
