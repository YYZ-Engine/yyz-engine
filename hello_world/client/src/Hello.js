import React, { Component } from 'react';

class Hello extends Component {

  state = {
    response: ''
  };
  componentDidMount() {
    this.callHelloAPI()
      .then(res => this.setState({ response: res.greeting + ' ' + res.dayOfWeek }))
      .catch(err => console.log(err));
  }
  callHelloAPI = async () => {
    const response = await fetch('/api/hello?json');
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

export default Hello;
