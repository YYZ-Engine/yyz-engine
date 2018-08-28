import React, { Component } from 'react';
import { getGreeting } from './api/hello';
import './App.css';
import './Morning.css';
import './Afternoon.css';
import './Evening.css';

class Hello extends Component {
	constructor (props) {
		super(props);
		this.state = {
			response: ''
		};
	}
	componentDidMount() {
		getGreeting()
			.then(res => { 
				this.setState({ response: res.data.greeting + ' ' + res.data.dayOfWeek });
			})
			.catch(err => console.error(err));
	}

	render() {
		var sun;
		var sky;
		if ((this.state.response.split(' ')[1]) === 'Morning') {
			sun = 'morningSun';
			sky = 'morningSky';
		} else if ((this.state.response.split(' ')[1]) === 'Afternoon') {
			sun = 'afternoonSun';
			sky = 'afternoonSky';
		} else if ((this.state.response.split(' ')[1]) === 'Evening') {
			sun = 'eveningSun';
			sky = 'eveningSky';
		}

		return (
			<div className='App-intro'>
				<div className={sky}>
					<div className={sun}>
					</div>
					<p> 
						{this.state.response}
					</p>
				</div>
			</div>
		);
	}
}

export default Hello;
