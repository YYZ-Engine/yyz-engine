const httpMocks = require('node-mocks-http');
const yyz_hello = require('../libs/yyz-hello');

describe('get location module', () => {
  describe('/api/world', () => {
    var req  = httpMocks.createRequest({
      method: 'GET',
      port: '5000',
      url: '/api/world',
    });

    var res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });

    it('should respond with the country of the user', function(done) {
      res.on('end', function() {
        expect(res._getData()).toBeDefined();
        done();
      });

      yyz_hello.getLocation(req,res);
    });

    it('gets a JSON response', () => {
      res._getData();
      expect(yyz_hello.checkIfJSON(res._getData())).toBe(false);
    });
  });

  describe('/api/world?json', () => {
    var req  = httpMocks.createRequest({
      method: 'GET',
      port: '5000',
      url: '/api/world',
      query: 'json'
    });

    var res = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });

    it('should respond with the country of the user', function(done) {
      res.on('end', function() {
        expect(res._getData()).toBeDefined();
        done();
      });

      yyz_hello.getLocation(req,res);
    });

    it('gets a JSON response', () => {
      res._getData();
      expect(yyz_hello.checkIfJSON(res._getData())).toBe(true);
    });
  });
});
