var http=require('http');
var imp=require('./module1');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(imp.myDate());
    res.end();

}).listen(345);