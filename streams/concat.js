var concat = require('concat-stream');

function reverseString() {
	return concat( function (data) {
		console.log(data.toString());
	} )
} 

process.stdin
.pipe(reverseString()) 
.pipe(process.stdout);
