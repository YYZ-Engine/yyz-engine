var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<p>Enter <strong>/hello</strong> or <strong>/world</strong> in the browser. </p>');
});

app.get('/hello', function(req, res){
  // ask OS what time and day it is and return a greeting
  // get current date from OS
  var currentDate = new Date();
  // get current day of the week
  var dayOfTheWeek = currentDate.toLocaleString('en-us', {  weekday: 'long' });
  // get current month, day and year
  var date = (currentDate.getMonth()+1) + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
  // get current hour
  var time = currentDate.getHours();
  var greeting = '';
  // depending on the hour, set greeting to a specific greeting
  if (time > 3 && time < 12) {
    greeting = 'Good Morning';
  } else if (time >= 12 && time < 20) {
    greeting = 'Good Afternoon';
  } else if (time >= 20 && time <= 3) {
    greeting = 'Good Evening'
  }
  // return a greeting
  res.send(`${greeting}` + '!' + ' It\'s' + ` ${dayOfTheWeek} ${date}`);
});

app.get('/hello/monday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/monday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Monday!');
});

app.get('/hello/monday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Tuesday!');
});

app.get('/hello/monday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening, It\'s Tuesday!');
});

app.get('/hello/tuesday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Tuesday!');
});

app.get('/hello/tuesday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Monday!');
});

app.get('/hello/tuesday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening, It\'s Monday!');
});

app.get('/hello/tuesday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/wednesday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Wednesday!');
});

app.get('/hello/wednesday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Wednesday!');
});

app.get('/hello/wednesday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening, It\'s Wednesday!');
});

app.get('/hello/wednesday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/thursday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/thursday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Thursday!');
});

app.get('/hello/thursday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Thursday!');
});

app.get('/hello/thursday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening, It\'s Thursday!');
});

app.get('/hello/friday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/friday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Friday!');
});

app.get('/hello/friday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Friday!');
});

app.get('/hello/friday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening');;
});

app.get('/hello/saturday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.

  res.send('Good Morning');
});

app.get('/hello/saturday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Saturday!');
});

app.get('/hello/saturday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Saturday!');
});

app.get('/hello/saturday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening');;
});

app.get('/hello/sunday', function(req, res){
  // ask the OS what time it is. 
  // return greeting for Morning if it is 4:00AM - 11:59AM, 
  // Afternoon if it is 12:00PM - 7:59PM and 
  // Evening if it is 8:00PM - 3:59AM.
  res.send('Good Morning');
});

app.get('/hello/sunday/morning', function(req, res){
  // return a greeting
  res.send('Good Morning, It\'s Sunday!');
});

app.get('/hello/sunday/afternoon', function(req, res){
  // return a greeting
  res.send('Good Afternoon, It\'s Sunday!');
});

app.get('/hello/sunday/evening', function(req, res){
  // return a greeting
  res.send('Good Evening');;
});

app.get('/world', function(req, res){
  // return a city
  res.send('San Jose');
});

app.listen(3000);
