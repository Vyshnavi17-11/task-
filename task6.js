var url =require('url');
var adr= 'http://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem';
var q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
var qdata =q.query;
console.log(url.parse('http://www.etutorialspoint.com/index.php/nodejs/node-js-filesystem'),true);