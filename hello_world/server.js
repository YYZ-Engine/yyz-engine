const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

let greeting = 'Good Morning';
let dayOfWeek = 'Monday';
let city = 'City';
let state = 'State';
let country = 'Country';

app.get('/api/hello', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      greeting: greeting, 
      dayOfWeek: dayOfWeek 
    });
  }
  res.send(greeting + ' ' + dayOfWeek);
});


app.get('/api/world', (req, res) => {
  if ('json' in req.query) {
    res.send({ 
      city: city, 
      state: state,
      country: country 
    });
  }
  res.send(city + ', ' + state + ', ' + country);
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
