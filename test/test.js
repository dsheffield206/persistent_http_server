'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
require(__dirname + '/../http_server');


describe('time test', function() {
    it('should return the current time of the server', function(done) {
        chai.request('localhost:3000')
            .get('/time')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                done();
            });
    });
});

describe('greet name test', function() {
    it('should respond to greet with the name given', function() {
        chai.request('localhost:3000')
            .get('/greet/name')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                expect(res.text).to.eql('hello, name');
            });
    });
});

describe('POST to JSON test', function() {
    it('should post name to JSON object', function() {
        chai.request('localhost:3000')
            .get('/greet')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
    });
});

describe('404 test', function() {
    it('should send 404 error for other url requests', function() {
        chai.request('localhost:3000')
            .get('/other')
            .end(function(err, res){
                expect(res.status).to.eql(404);
            });
    });
});
