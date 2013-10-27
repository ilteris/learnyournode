var http = require('http');
var request = require ('request');

var server = http.createServer(function (req, res) {

	var r = request.post();
	r.pipe(process.stdin).pipe(process.stdout);
});

server.listen(8001);
