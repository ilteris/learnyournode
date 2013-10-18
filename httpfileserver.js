var http = require('http');
var fs = require('fs');
var file = process.argv[2];

var server = http.createServer(function(req, res) {
var src = fs.createReadStream(file);
src.pipe(res)
})
server.listen(8000);

