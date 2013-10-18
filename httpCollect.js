var http = require('http');
var url = process.argv[2];

var request = http.get(url, function(response) {
    response.setEncoding('utf8');
    var pageData = "";
    response.on('data', function(data) {
        pageData += data;
    });

    response.on('end', function() {
        console.log(pageData.length);
        console.log(pageData)
    });
});
