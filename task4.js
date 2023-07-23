
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('index.html',function(error,data){
     res.writeHead(200,{'Content-type':'html/text'});
    res.write(data);
    res.end();
    console.log('its working');
        
    });

}).listen(901);
