import React, { Component } from 'react';
import { getGreeting } from './api/hello';
import './App.css';

class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    };
  };
  componentDidMount() {
    getGreeting()
      .then(res => { 
        this.setState({ response: res.data.greeting + ' ' + res.data.dayOfWeek })
      })
      .catch(err => console.log(err));
  }

  render() {
      return (
        <div className='App-intro'>
          <p>
            {this.state.response}
          </p>
        </div>
      );
    }
}

export default Hello;
