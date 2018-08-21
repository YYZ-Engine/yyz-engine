const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const yyz_hello = require('./libs/yyz-hello');

app.get('/api/hello', (req, res) => {
	yyz_hello.getGreeting(req, res);
});

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var day of days) {
	app.get('/api/hello/'+day, (req, res) => {
		yyz_hello.getDayGreeting(req,res);
	});
}

app.get('/api/world', (req, res) => {
	yyz_hello.getLocation(req, res);
});

app.get('/api/requests', (req, res) => {
	var requests = yyz_hello.getRequestHistory(req);
	res.send(requests);
});

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port);
