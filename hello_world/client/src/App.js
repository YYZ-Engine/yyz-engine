import React from 'react';
import Home from './Home';
import Hello from './Hello';
import World from './World';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/hello' component={Hello} />
      <Route path='/world' component={World} />
    </Switch>
  </Router>
);

export default App;
