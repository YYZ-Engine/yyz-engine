const httpMocks = require('node-mocks-http');
const yyz_hello = require('../libs/yyz-hello');

describe('get location module', () => {
	describe('/api/world', () => {
    var req  = httpMocks.createRequest({
      method: 'GET',
      url: '/api/world',
      port: '5000'
    });

    var res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });

		it('responds with location', function( done ) {
      res.on('end', function() {
        expect(res._getData()).toBeDefined();
        done();
      });
      yyz_hello.getLocation(req,res);
    });
	});
	describe('/api/world?json', () => {
    var req  = httpMocks.createRequest({
      method: 'GET',
      url: '/api/world',
      query: '?json',
      port: '5000'
    });

    var res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });

		it('responds with location', function( done ) {
      res.on('end', function() {
        expect(res._getData()).toBeDefined();
        done();
      });
      yyz_hello.getLocation(req,res);
    });
	});
});
