const httpMocks = require('node-mocks-http');
const yyz_hello = require('../libs/yyz-hello');
const ip2countrify = require('ip2countrify');
const publicIp = require('public-ip');

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

    yyz_hello.getLocation = (req,res) => {
      it('get location from IPv6', function( done ) {
        publicIp.v6().then(ip => {
          ip2countrify.lookup(
            ip,
            function( ip, results ) {
              var country = results.countryName;
              expect(country).toBe('United States');
              done();
            }
          );
        });
      });
    }
    yyz_hello.getLocation(req,res);
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

    yyz_hello.getLocation = (req,res) => {
      it('get location from IPv6', function( done ) {
        publicIp.v6().then(ip => {
          ip2countrify.lookup(
            ip,
            function( ip, results ) {
              var response = ({'country': results.countryName});
              expect(response.country).toBe('United States');
              done();
            }
          );
        });
      });
    }

    yyz_hello.getLocation(req,res);
  });
});
