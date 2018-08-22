import React, { Component } from 'react';
import { getCountry } from './api/world';

class World extends Component {

	constructor (props) {
		super(props);
		this.state = {
			response: 'Searching for your location...'
		};
	}

	componentDidMount() {
		getCountry()
			.then(res => this.setState({ response: 'You are located in ' + res.data.country + '.'}))
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

export default World;
