import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Hello from './Hello';
import World from './World';

class Menu extends Component {
	render() {
		return(
			<Router>
				<div>
					<Link to="/">Home</Link> | <Link to="/hello">Hello</Link> | <Link to="/world">World</Link>
					<Route exact path="/" component={Home} />
					<Route path="/hello" component={Hello} />
					<Route path="/world" component={World} />
				</div>
			</Router>
		);
	}
}

export default Menu;
