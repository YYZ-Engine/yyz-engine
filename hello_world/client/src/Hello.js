import React, { Component } from 'react';

let greeting = '';  

function getOutput() {
  if (!navigator.geolocation){
    console.log('Unable to get geolocation'); 
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var d = new Date(position.timestamp);
    var hour = d.getHours();
    var dayOfTheWeek = d.toLocaleString('en-us', {  weekday: 'long' });
    // depending on the hour, set greeting to a specific greeting
    if (hour > 3 || hour < 12) {
      greeting = 'Good Morning ' + dayOfTheWeek;
    } else if (hour >= 12 || hour < 20) {
      greeting = 'Good Afternoon ' + dayOfTheWeek;
    } else if (hour >= 20 || hour <= 3) {
      greeting = 'Good Evening ' + dayOfTheWeek;
    }
    console.log(greeting);
    document.getElementById('result').innerHTML = greeting;
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

getOutput(); 

class Hello extends Component {
  render() {
    return (
            <div>
              <h1>
                Hello World
              </h1>
              <div id='result'>
              </div>
            </div>
   );
  }
}

export default Hello;

