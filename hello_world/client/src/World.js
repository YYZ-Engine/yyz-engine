import React, { Component } from 'react';
import * as Nominatim from "nominatim-browser";

class World extends Component {

  findMe = () => {
    let result = document.getElementById('result');
    let latitude = '';
    let longitude = ''; 

    result.innerHTML = 'Loading...';
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      // Use Nominatim, a browser-usable client for Open Street Map's Nominatim service, to look up address based on geocoordinates 
      Nominatim.reverseGeocode({
        lat: latitude,
        lon: longitude,
        addressdetails: true
      })
      .then((data : NominatimResponse) =>
      {
        result.innerHTML = 'You are located in: ' + data.address.city + ', ' + data.address.state + ', ' + data.address.country;
    })
      .catch((error) =>
      {
        console.error(error); 
        result.innerHTML = error;
      });

    }

    function error() {
      console.log('Unable to retrieve your location');
      result.innerHTML = 'Unable to retrieve your location';
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return (
            <div>
              <h1>
                Hello World
              </h1>
              <div id='result'>
                <button onClick={this.findMe}>Find Me</button>
              </div>
            </div>
    );
  }
}

export default World;
