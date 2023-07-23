var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-head':'text/html'});
    res.end("Hello World");
}).listen(765);