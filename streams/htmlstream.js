var trumpet = require('trumpet');
var through = require ('through');


function changeToUpperCase() {
	var tr = trumpet();
	return through(
		function write( buf ) {
		this.emit('data', buf);
		//this.emit(ws.toString().toUpperCase());
		tr.pipe(this);
		var ws = tr.select('.loud').createWriteStream();
		ws.end('test');
		console.log(ws);

	},
	function end() {
		this.emit(null);
	}
	)
}

process.stdin
.pipe(changeToUpperCase())
//.pipe(process.stdout);
