var http = require('http'),
  static = require('node-static');

var file = new static.Server('./public');

var server = http.createServer(function (req, res) {
  console.log("Request received");
  req.addListener('end', function () {
    file.serve(req, res);
  }).resume();
});

server.listen(8000);
console.log("Listening on port 8000");
