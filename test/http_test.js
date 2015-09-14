'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var url = 'localhost:3000/';
require(__dirname + '/../lib/http_server');


describe('HTTP Server Test', function() {
    it('should return 200 for a GET request', function(done) {
        chai.request(url)
            .get('/data')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                done();
            });
    });

    it('should save data to a file', function(done) {
        chai.request(url)
            .get('/data')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.text).to.not.eql(null);
                done();
            });
    });

    it('should send 404 error for other req.methods', function(done) {
        chai.request(url)
            .put('/data')
            .end(function(err, res){
                expect(res.status).to.eql(404);
                done();
            });
    });
});
