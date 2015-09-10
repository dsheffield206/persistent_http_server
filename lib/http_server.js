'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify('{"msg": "hello! thanks for visiting our site!"}'));
        return res.end();
        console.log('the req.method was GET');
    }

    if (req.url === '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        fs.readdir('./data', function(err, file) {
            res.write(JSON.stringify(file));
            console.log('the req url was /data')
            return res.end();
        });
    }

    if (req.method === 'POST') {
        req.on('data', function(data) {
            var parsed = JSON.parse(data.toString());
            console.log('the req method was POST');
        });

        res.writeHead(200, {'Content-Type': 'application/json'});
        fs.readdir('./data', function(err, file) {
            var fileNum = file.length + 1;
            fs.writeFile('data/file' + fileNum + '.json', req.body, function(err) {
                if (err) throw err;
            });
            res.write(JSON.stringify(parsed));
            return res.end();
        });
    }

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('page not found');
    res.end();
});

server.listen(3000, function() {
    console.log('server is up on 3000');
});


module.exports = exports = server;
