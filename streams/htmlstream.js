var trumpet = require('trumpet');
var through = require ('through');


function changeToUpperCase() {
	return through(
		function write( buf ) {
		console.log(buf.toString());
	}
	)
}


process.stdin
.pipe(changeToUpperCase());
