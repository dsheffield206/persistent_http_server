'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
require(__dirname + '/../http_server');


describe('GET test', function() {
    it('should return 200 for a GET request', function(done) {
        chai.request('localhost:3000')
            .method('GET')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                done();
            });
    });
});

describe('/data test', function() {
    it('should save data to a file', function() {
        chai.request('localhost:3000')
            .get('/data')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                expect(res.text).to.not.eql(null);
            });
    });
});

describe('POST to JSON test', function() {
    it('should save POST request to JSON file', function() {
        chai.request('localhost:3000')
            .method('POST')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
            });
    });
});

describe('404 test', function() {
    it('should send 404 error for other req.methods', function() {
        chai.request('localhost:3000')
            .method('DELETE')
            .end(function(err, res){
                expect(res.status).to.eql(404);
            });
    });
});
