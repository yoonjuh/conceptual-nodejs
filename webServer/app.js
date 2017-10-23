// var http = require("http");

// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end("Hello world\n");
// }).listen(1337, '127.0.0.1');
 //============================================================================
// var http = require("http");
// var fs = require("fs");

// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/html"});
//     var html = fs.readFileSync(__dirname + '/index.htm' , 'utf8');
//     var message = 'Hello world ...';
//     html = html.replace('{Message}', message);
//     res.end(html);
// }).listen(1337, '127.0.0.1');

//============================================================================

// var http = require("http");
// var fs = require("fs");

// http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html" });
//     fs.createReadStream(__dirname + '/index.htm').pipe(res);
// }).listen(1337, '127.0.0.1');

//=============================================================================

var http = require("http");
var fs = require('fs');

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
        firstname: 'John',
        lastname: "Doe"
    };
    res.end(JSON.stringify(obj));
}).listen(1337,'127.0.0.1');