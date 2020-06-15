var http = require('http');

var server = http.createServer(function(request,response){
			response.writeHead(200,{"Content-Type":"text/plain"});
response.end("Hello from G3 node app!!!\n");
});

server.listen(8000);
console.log("Server started and is listening on the port 8000");