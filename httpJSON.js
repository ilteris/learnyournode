var http = require ('http');
var url = require('url');



server = http.createServer(function(reqest, response) {
    parsedUrl = url.parse(request.url, true);
    resource = routes[parsedUrl.pathname];
    
}
