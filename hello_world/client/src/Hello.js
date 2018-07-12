import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
       greeting: '',
       dayOfWeek: ''
    }
  }

  displayGreeting = () => {
    const success = (position) => {
      var greeting = '';
      var d = new Date(position.timestamp);
      var hour = d.getHours();
      var dayOfWeek = d.toLocaleString('en-us', {  weekday: 'long' });
      
      // depending on the hour, set greeting to a specific greeting
      if (hour > 3 && hour < 12) {
        greeting = 'Good Morning'
      } else if (hour >= 12 && hour < 20) {
        greeting = 'Good Afternoon'
      } else if (hour >= 20 || hour <= 3) {
        greeting = 'Good Evening'
      }
      this.setState({
        ...this.state, // unwraps the current state
        greeting: greeting,
        dayOfWeek: dayOfWeek
      });

    }

    const error = () => {
      console.log('Unable to retrieve your location');
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
  }
 
  render() {
    const {location} = this.props
    const query = location.search
    this.displayGreeting()
    if (query === '?json') {
      return (
        JSON.stringify({'greeting': this.state.greeting, 'dayOfWeek': this.state.dayOfWeek})
      )
    } else {
      return (
        <div id='result'>
          <p>
            {this.state.greeting} {this.state.dayOfWeek}
          </p>
        </div>
      );
    }
  }
}

export default Hello;

