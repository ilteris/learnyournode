var through = require('through');
var split = require('split');



function count() {
    var lines = 0;
    return through(
        function write (buf) {
            lines++;
            if(lines % 2) {
                this.queue(buf.toString().toLowerCase() + '\n');
            }
            else
            {
                this.queue(buf.toString().toUpperCase() + '\n');
            }
        }, function end() {
            this.emit(null); //don't expect any more data
        });
}

process.stdin
    .pipe(split())
    .pipe(count())
    .pipe(process.stdout);
