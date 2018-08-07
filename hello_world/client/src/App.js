import React, {Component} from 'react';
import './App.css';
import Home from './Home';
import Hello from './Hello';
import World from './World';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>YYZ Engine Hello World</h1>
        </header>
        <div className='App-intro'>
          <p>Welcome to YYZ Engine Hello World app, where you can get a custom greeting, or get your location.</p>
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/hello' component={Hello} />
            <Route path='/world' component={World} />
          </Switch>
        </Router>
        </div>
      </div>
    );
  }
}

export default App;
