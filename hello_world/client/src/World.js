import React, { Component } from 'react';
import * as Nominatim from "nominatim-browser";

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
       result: ''
    }
  }

  findMe = () => {
    let result = '';
    let latitude = '';
    let longitude = ''; 

    result = 'Loading...';
    const success = (position) => {
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
        this.setState({result: 'You are located in: ' + data.address.city + ', ' + data.address.state + ', ' + data.address.country});
      })
      .catch((error) =>
      {
        console.error(error); 
        result = error;
      });

    }

    const error = () => {
      console.log('Unable to retrieve your location');
      result = 'Unable to retrieve your location';
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
          {this.findMe()}
          {this.state.result}
        </div>
      </div>
    );
  }
}

export default World;
