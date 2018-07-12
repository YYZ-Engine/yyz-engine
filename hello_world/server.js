const express = require('express');
const path = require('path');
const publicIp = require('public-ip');
const ip2countrify = require( 'ip2countrify');
const app = express();
const port = process.env.PORT || 5000;

let greeting = '';
let dayOfWeek = '';
let country = '';

var d = new Date;
var hour = d.getHours();
dayOfWeek = d.toLocaleString('en-us', {  weekday: 'long' });

// depending on the hour, set greeting to a specific greeting
if (hour > 3 && hour < 12) {
  greeting = 'Good Morning'
} else if (hour >= 12 && hour < 20) {
  greeting = 'Good Afternoon'
} else if (hour >= 20 || hour <= 3) {
  greeting = 'Good Evening'
}

app.get('/api/hello', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: dayOfWeek 
    });
  } 
  res.send(greeting + ' ' + dayOfWeek);
});

app.get('/api/hello/monday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Monday' 
    });
  } 
  res.send(greeting + ' ' + 'Monday');
});

app.get('/api/hello/tuesday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Tuesday' 
    });
  } 
  res.send(greeting + ' ' + 'Tuesday');
});

app.get('/api/hello/wednesday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Wednesday' 
    });
  } 
  res.send(greeting + ' ' + 'Wednesday');
});

app.get('/api/hello/thursday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Thursday' 
    });
  } 
  res.send(greeting + ' ' + 'Thursday');
});

app.get('/api/hello/friday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Friday' 
    });
  } 
  res.send(greeting + ' ' + 'Friday');
});

app.get('/api/hello/saturday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Saturday' 
    });
  } 
  res.send(greeting + ' ' + 'Saturday');
});

app.get('/api/hello/sunday', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: 'Sunday' 
    });
  } 
  res.send(greeting + ' ' + 'Sunday');
});

app.get('/api/world', (req, res) => {
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
  if ('json' in req.query) {
    res.send({ 
      country: country, 
    });
  }
  res.send(country);
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
