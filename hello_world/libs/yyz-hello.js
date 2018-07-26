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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getGreeting = (req, res) => {
  if ('json' in req.query) {
    res.json({
      greeting: greeting,
      dayOfWeek: dayOfWeek
    });
  } else {
    res.send(greeting + ' ' + dayOfWeek);
  }
}

const getDayGreeting = (req, res) => {
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = capitalizeFirstLetter(req.path.split("/hello/")[1]);
  if ('json' in req.query) {
    res.json({'greeting': greeting, 'dayOfWeek': day});
  } else {
    res.send(greeting + ' ' + day);
  }
}

module.exports = {
  getLocation: getLocation,
  getGreeting: getGreeting,
  getDayGreeting: getDayGreeting
};
