const publicIp = require('public-ip');
const ip2countrify = require( 'ip2countrify');
const path = require('path');

const checkIfJSON = (x) => {
  if (typeof x == 'object') {
    // test if x can be turned into a JSON string
    try { x = JSON.stringify(x); }
    catch(err) {
      return false;
    }
  }
  if (typeof x == 'string') {
    // test if it can get the JS value or object from x
    try { x = JSON.parse(x); }
    catch (err) {
      return false;
    }
  }
  if (typeof x != 'object') {
    return false;
  }
  return true;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const getLocation = (req, res) => {
  var country = '';
  publicIp.v6().then(ip => {
    ip2countrify.lookup(
      ip,
      function( ip, results, error ) {
        if (error) {
          console.warn( 'An error has occurred: ' + error );
          res.send("error");
        }
        var countryResult = ({"country": results.countryName});
        if (JSON.stringify(req.query).match(/json/g)) {
          var data = JSON.parse(JSON.stringify({countryResult}));
          res.setHeader('Content-Type', 'application/json');
          res.send(data);
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

const getGreeting = (req, res) => {
  greetingResponse();
  var greeting = greetingResponse().greeting;
  var day = greetingResponse().dayOfWeek;
  if (JSON.stringify(req.query).match(/json/g)) {
    var data = JSON.parse(JSON.stringify({
      'greeting': greeting,
      'dayOfWeek': day
    }));
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } else {
    res.send(greeting + ' ' + day);
  }
};

const getDayGreeting = (req, res) => {
  greetingResponse();
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let day = capitalizeFirstLetter(req.path.split("/hello/")[1]);
  if (JSON.stringify(req.query).match(/json/g)) {
    var data = JSON.parse(JSON.stringify({
      'greeting': greetingResponse().greeting, 
      'dayOfWeek': day
    }));
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } else {
    res.send(greetingResponse().greeting + ' ' + day);
  }
}

module.exports = {
  checkIfJSON: checkIfJSON,
  capitalizeFirstLetter: capitalizeFirstLetter,
  greetingResponse: greetingResponse,
  getLocation: getLocation,
  getGreeting: getGreeting,
  getDayGreeting: getDayGreeting
};
