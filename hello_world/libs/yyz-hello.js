const publicIp = require('public-ip');
const ip2countrify = require( 'ip2countrify');
const path = require('path');

function GetLocation(req, res) {
  var country = 'test';
  publicIp.v6().then(ip => {
    ip2countrify.lookup(
      ip,
      function( ip, results, error ) {
        if (error) {
          console.warn( 'An error has occurred: ' + error );
          res.send("error");
        }

        if ('json' in req.query) {
          res.send({"country": results.countryName});
        } else {
          res.send(results.countryName);
        }
      }
    );
  });
}

module.exports = {
  GetLocation: GetLocation
};
