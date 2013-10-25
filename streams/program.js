var through = require('through');
var split = require('split');

var line = 0;
var tr = through(function write(buf) {
    line++;
    console.log("line is " + line + "\n");
    if (isOdd(line)) {
        this.queue(buf.toString().toLowerCase());
    }
    else {
        this.queue(buf.toString().toUpperCase());
    }
}, function end() {
    this.queue(null); //don't expect any more data
});

function isOdd(num) { return num % 2; }
process.stdin.pipe(tr).pipe(process.stdout);
