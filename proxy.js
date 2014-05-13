var http = require('http');
var httpProxy = require('http-proxy');
var path = require('path');

try {
  var token = require(path.resolve('proxy-config.json')).token;
} catch (e) {
  console.log('Please create a proxy-config.json file and add your token to it.');
  process.exit();
}

var proxy = httpProxy.createProxyServer({});
var server = require('http').createServer(function(req, res) {
  req.headers['Authorization'] = 'Bearer '+token;
  proxy.web(req, res, { target: 'https://canvas.instructure.com' });
});

console.log("Canvas proxy server listening on port 8080")
server.listen(8080);

