var myArr =[process.argv[2],process.argv[3], process.argv[4]];
var http = require('http');

var i = 0;
var url = myArr[i];

function fetch(url) {
    http.get(url, function(res){
        res.setEncoding('utf8');
        var allData = "";
        res.on('data', function(data) {
            allData += data;
        });
        res.on('end', function() {
            i++;
            console.log(allData);
            fetch(myArr[i]);
        })

    })
}

fetch (url);
