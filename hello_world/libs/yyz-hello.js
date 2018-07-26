const publicIp = require('public-ip');
const ip2countrify = require( 'ip2countrify');
const path = require('path');

const getLocation = (req, res) => {
  var country = 'test';
  publicIp.v6().then(ip => {
    ip2countrify.lookup(
      ip,
      function( ip, results, error ) {
        if (error) {
          console.warn( 'An error has occurred: ' + error );
          res.send("error");
        }
        var countryResult = ({"country": results.countryName});
        if ('json' in req.query) {
          res.json(countryResult);
        } else {
          res.send(results.countryName);
        }
      }
    );
  });
}

const getGreeting = (req, res) => {
  let greeting = '';
  let dayOfWeek = '';
  let country = '';
  let d = new Date;
  let hour = d.getHours();
  dayOfWeek = d.toLocaleString('en-us', {  weekday: 'long' });

  // depending on the hour, set greeting to a specific greeting
  if (hour > 3 && hour < 12) {
    greeting = 'Good Morning'
  } else if (hour >= 12 && hour < 20) {
    greeting = 'Good Afternoon'
  } else if (hour >= 20 || hour <= 3) {
    greeting = 'Good Evening'
  }

  if ('json' in req.query) {
    res.json({
      greeting: greeting,
      dayOfWeek: dayOfWeek
    });
  } else {
    res.send(greeting + ' ' + dayOfWeek);
  }
}

module.exports = {
  getLocation: getLocation,
  getGreeting: getGreeting
};
