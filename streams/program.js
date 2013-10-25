var through = require('through');
var tr = through(write, end);
tr.write = write;
tr.end = end;

function write(buf) {
    this.queue(buf.toString().toUpperCase());
}

function end() { 
    this.queue(null); //don't expect any more data
}

process.stdin.pipe(tr).pipe(process.stdout);
