var concat = require('concat-stream');

function reverseString() {
	return concat( function (data) {
		var text = data.toString();
		console.log(text.split('').reverse().join(''));
	} )
} 

process.stdin
.pipe(reverseString()) 
.pipe(process.stdout);
