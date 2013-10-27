var trumpet = require('trumpet');
var through = require ('through');


function changeToUpperCase() {
	var tr = trumpet();
	return through(
		function write( buf ) {
		this.queue(buf.toString()+ '\n');


	},
	function end() {
		this.pipe(tr);
		var ws = tr.select('.loud').createWriteStream();
		this.queue(ws.toString().toUpperCase());
		this.emit(null);
	}
	)
}


process.stdin
.pipe(changeToUpperCase())
.pipe(process.stdout);
