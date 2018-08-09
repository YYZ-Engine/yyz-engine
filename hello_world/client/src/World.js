import React, { Component } from 'react';

class World extends Component {

  state = {
    response: 'Searching for your location...'
  };
  componentDidMount() {
    this.callWorldAPI()
      .then(res => this.setState({ response: 'You are located in ' + res.country + '.'}))
      .catch(err => console.log(err));
  }
  callWorldAPI = async () => {
    const response = await fetch('/api/world?json');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

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

export default World;
