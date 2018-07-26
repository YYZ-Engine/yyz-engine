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

const greetingResponse = () => {
  let greeting = '';
  let dayOfWeek = '';
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

  return ({'date': d, 'hour': hour, 'greeting': greeting, 'dayOfWeek': dayOfWeek});
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getGreeting = (req, res) => {
  greetingResponse();
  if ('json' in req.query) {
    res.json({
      greeting: greetingResponse().greeting,
      dayOfWeek: greetingResponse().dayOfWeek
    });
  } else {
    res.send(greetingResponse().greeting + ' ' + greetingResponse().dayOfWeek);
  }
}

const getDayGreeting = (req, res) => {
  greetingResponse();
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = capitalizeFirstLetter(req.path.split("/hello/")[1]);
  if ('json' in req.query) {
    res.json({'greeting': greetingResponse().greeting, 'dayOfWeek': day});
  } else {
    res.send(greetingResponse().greeting + ' ' + day);
  }
}

module.exports = {
  greetingResponse: greetingResponse,
  getLocation: getLocation,
  getGreeting: getGreeting,
  getDayGreeting: getDayGreeting
};
