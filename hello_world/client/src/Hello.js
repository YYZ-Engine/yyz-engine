import React, { Component } from 'react';
import App from './App.css';

class Hello extends Component {
// TODO - figure out how to return JSON if query includes JSON
  constructor(props) {
    super(props);
    this.state = {
       greeting: ''
    }
  }
  displayGreeting = () => {
    let greeting = '';  
    const success = (position) => {
      var d = new Date(position.timestamp);
      var hour = d.getHours();
      var dayOfTheWeek = d.toLocaleString('en-us', {  weekday: 'long' });
      
      // depending on the hour, set greeting to a specific greeting
      if (hour > 3 && hour < 12) {
        greeting = 'Good Morning ' + dayOfTheWeek;
      } else if (hour >= 12 && hour < 20) {
        greeting = 'Good Afternoon ' + dayOfTheWeek;
      } else if (hour >= 20 || hour <= 3) {
        greeting = 'Good Evening ' + dayOfTheWeek;
      }
      this.setState({
        ...this.state, // unwraps the current state
        greeting: greeting
      });
    }

    const error = () => {
      console.log('Unable to retrieve your location');
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
  }
 
  render() {
  /* TODO - figure out how to return JSON if the query includes ?json 

  if (props.location.search === '?json') {
    this.displayGreeting().then((resData) => {
      this.setState({
        data: resData
      });
    })
  }
   */
    return (
      <div id='result'>
        <p>
          {this.displayGreeting()}
          {this.state.greeting}
        </p>
      </div>
    );
  }
}

export default Hello;

