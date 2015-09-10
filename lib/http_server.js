'use strict';

var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer(function(req, res) {
    debugger;
    if (req.url === '/time') {
        var serverTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify('{"msg": "hello! the time is " + serverTime}'));
        return res.end();
        console.log('the time is ' + serverTime);
    }

    if (req.url.slice(0, 6) === '/greet') {
        var resName = req.url.slice(7);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write('hello, ' + resName);
        return res.end();
    }

    if (req.url === '/greet' && req.method === 'POST') {
        req.on('data', function(data) {
            var parsed = JSON.parse(data.toString());
            console.log('parsing ' + data.toString());
        });

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify('{"msg": "hello " + parsed}'));
        return res.end();
    }

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('page not found');
    res.end();
});

server.listen(3000, function() {
    console.log('server up');
});
