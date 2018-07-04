import React from 'react';
import Home from './Home';
import Hello from './Hello';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </Router>
);

export default App;
