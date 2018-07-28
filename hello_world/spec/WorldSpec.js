const request = require('request');
const publicIp = require('public-ip');
const ip2countrify = require( 'ip2countrify');
/*
let country = '';

publicIp.v6().then(ip => {
  ip2countrify.lookup(
    ip,
    function( ip, results, error ) {
      if ( error ) {
        return console.warn( 'An error has occurred: ' + error );
      }
      country = results.countryName
    }
  );
});
var worldResponse = {'country': country};

it("should respond with the user's country", function(done) {
  request("http://localhost:5000/api/world?json", function(error, response, body){
    expect(body).toEqual(JSON.stringify(worldResponse));
    done();
  });
});*/
