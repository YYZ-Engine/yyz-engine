const httpMocks = require('node-mocks-http');
const yyz_hello = require('../libs/yyz-hello');

describe('helper functions', () => {

	describe('capitalizeFirstLetter(string)', () => {
		var day = 'monday';

		var capitalizedString = yyz_hello.capitalizeFirstLetter(day);

		it('passes a random weekday string as the argument', () => {
			expect(day).toBeDefined();
		});

		it('can capitalize the first letter', () => {
			expect(day.charAt(0).toUpperCase()).toBe('M');
		});

		it('can slice the string by the first index', () => {
			expect(day.slice(1)).toBe('onday');
		});

		it('can return a string with the first letter capitalized', () => {
			expect(capitalizedString).toBe('Monday');
		});
	});

	describe('checkIfJSON(x)', () => {
		var string = yyz_hello.checkIfJSON('x');
		var obj = yyz_hello.checkIfJSON({'apple':'orange'});
		var obj2 = yyz_hello.checkIfJSON({'apple':3});
		var obj3 = yyz_hello.checkIfJSON({});
		var emptyString = yyz_hello.checkIfJSON('');
		var noValue = yyz_hello.checkIfJSON();

		it('checks if string is JSON', () => {
			expect(string).toBe(false);
		});

		it('checks if object is JSON', () => {
			expect(obj).toBe(true);
		});

		it('checks if object 2 is JSON', () => {
			expect(obj2).toBe(true);
		});

		it('checks if object 3 is JSON', () => {
			expect(obj3).toBe(true);
		});

		it('checks if empty string is JSON', () => {
			expect(emptyString).toBe(false);
		});

		it('checks if no value is JSON', () => {
			expect(noValue).toBe(false);
		});

	});

	describe('greetingResponse()', () => {
		yyz_hello.greetingResponse();
		var date = yyz_hello.greetingResponse().date;
		var hour = yyz_hello.greetingResponse().hour;

		it('has an date', () => {
			expect(date).toBeDefined();
		});

		it('has an hour', () => {
			expect(hour).toBe(date.getHours());
		});

		it('has a greeting', () => {
			var greeting = '';
			if (hour > 3 && hour < 12) {
				greeting = 'Good Morning';
			} else if (hour >= 12 && hour < 20) {
				greeting = 'Good Afternoon';
			} else if (hour >= 20 || hour <= 3) {
				greeting = 'Good Evening';
			}
			const customGreeting = yyz_hello.greetingResponse().greeting;
			expect(customGreeting).toBe(greeting);
		});

		it('has a day', () => {
			const day = yyz_hello.greetingResponse().dayOfWeek;
			const todaysDate = date.toLocaleString('en-us', {  weekday: 'long' });
			expect(day).toBe(todaysDate);
		});

	});
});

describe('routes module', () => {

	describe('GET /api/hello', () => {

		var date = yyz_hello.greetingResponse().date;
		var hour = yyz_hello.greetingResponse().hour;
		var greeting = yyz_hello.greetingResponse().greeting;
		var dayOfWeek = yyz_hello.greetingResponse().dayOfWeek;

		it('gets the date from calling getGreeting', () => {
			expect(date).toBeDefined();
		});

		it('gets the hour from calling getGreeting', () => {
			expect(hour).toBeDefined();
		});

		it('gets the greeting from calling getGreeting', () => {
			expect(greeting).toBeDefined();
		});

		it('gets the day from calling getGreeting', () => {
			expect(dayOfWeek).toBeDefined();
		});

		var req  = httpMocks.createRequest({
			method: 'GET',
			url: '/api/hello',
			port: '5000'
		});

		var res = httpMocks.createResponse({
			eventEmitter: require('events').EventEmitter
		});

		it('responds with a greeting and a day', function(done) {
			res.on('end', function() {
				expect(res._getData()).toBe(greeting + ' ' + dayOfWeek);
				done();
			});

			yyz_hello.getGreeting(req,res);
		});

		it('gets a 200 status', () => {
			expect(res.statusCode).toBe(200);
		});

		it('gets a JSON response', () => {
			expect(yyz_hello.checkIfJSON(res._getData())).toBe(false);
		});

	});

	describe('GET /api/hello?json', () => {

		var date = yyz_hello.greetingResponse().date;
		var hour = yyz_hello.greetingResponse().hour;
		var greeting = yyz_hello.greetingResponse().greeting;
		var dayOfWeek = yyz_hello.greetingResponse().dayOfWeek;

		it('gets the date from calling getGreeting', () => {
			expect(date).toBeDefined();
		});

		it('gets the hour from calling getGreeting', () => {
			expect(hour).toBeDefined();
		});

		it('gets the greeting from calling getGreeting', () => {
			expect(greeting).toBeDefined();
		});

		it('gets the day from calling getGreeting', () => {
			expect(dayOfWeek).toBeDefined();
		});

		var req  = httpMocks.createRequest({
			method: 'GET',
			port: '5000',
			url: '/api/hello',
			query: 'json'
		});

		var res = httpMocks.createResponse({
			eventEmitter: require('events').EventEmitter
		});

		yyz_hello.getGreeting(req,res);
		var data = res._getData();

		it('responds with a greeting', () => {
			expect(data.greeting).toEqual(greeting);
		});

		it('responds with a day', () => {
			expect(data.dayOfWeek).toEqual(dayOfWeek);
		});

		it('gets a 200 status', () => {
			expect(res.statusCode).toBe(200);
		});

		it('gets a JSON response', () => {
			expect(yyz_hello.checkIfJSON(data)).toBe(true);
		});

	});

	describe('GET /api/hello/dayOfWeek', () => {

		var date = yyz_hello.greetingResponse().date;
		var hour = yyz_hello.greetingResponse().hour;
		var greeting = yyz_hello.greetingResponse().greeting;
		var dayOfWeek = yyz_hello.greetingResponse().dayOfWeek;

		it('gets the date from calling getGreeting', () => {
			expect(date).toBeDefined();
		});

		it('gets the hour from calling getGreeting', () => {
			expect(hour).toBeDefined();
		});

		it('gets the greeting from calling getGreeting', () => {
			expect(greeting).toBeDefined();
		});

		it('gets the day from calling getGreeting', () => {
			expect(dayOfWeek).toBeDefined();
		});

		describe('gets day from request path', () => {
			var path = '/api/hello/day';
			var day = yyz_hello.capitalizeFirstLetter(path.split('/hello/')[1]);
			it('gets the day from /api/hello/monday path', () => {
				if (path == '/api/hello/monday' ) {
					expect(day).toBe('Monday');
				}
			});

			it('gets the day from /api/hello/tuesday', () => {
				if (path == '/api/hello/tuesday' ) {
					expect(day).toBe('Tuesday');
				}
			});

			it('gets the day from /api/hello/wednesday', () => {
				if (path == '/api/hello/wednesday' ) {
					expect(day).toBe('Wednesday');
				}
			});

			it('gets the day from /api/hello/thursday', () => {
				if (path == '/api/hello/thursday' ) {
					expect(day).toBe('Thursday');
				}
			});

			it('gets the day from /api/hello/friday', () => {
				if (path == '/api/hello/friday' ) {
					expect(day).toBe('Friday');
				}
			});

			it('gets the day from /api/hello/saturday', () => {
				if (path == '/api/hello/saturday' ) {
					expect(day).toBe('Saturday');
				}
			});

			it('gets the day from /api/hello/sunday', () => {
				if (path == '/api/hello/sunday' ) {
					expect(day).toBe('Sunday');
				}
			});
		});
   
		describe('/api/hello/monday', ()=> { 
			var req  = httpMocks.createRequest({
				method: 'GET',
				port: '5000',
				url: '/api/hello/monday',
			});

			var res = httpMocks.createResponse({
				eventEmitter: require('events').EventEmitter
			});

			yyz_hello.getDayGreeting(req,res);
			var data = res._getData();

			it('responds with a greeting and day', () => {
				var day = yyz_hello.capitalizeFirstLetter(req.path.split('/hello/')[1]);
				expect(res._getData()).toBe(greeting + ' ' + yyz_hello.capitalizeFirstLetter(day));
			});

			it('gets a 200 status', () => {
				expect(res.statusCode).toBe(200);
			});

			it('gets a JSON response', () => {
				expect(yyz_hello.checkIfJSON(data)).toBe(false);
			});
		});

		describe('/api/hello/monday?json', ()=> { 
			var req  = httpMocks.createRequest({
				method: 'GET',
				port: '5000',
				url: '/api/hello/monday',
				query: 'json'
			});

			var res = httpMocks.createResponse({
				eventEmitter: require('events').EventEmitter
			});

			yyz_hello.getDayGreeting(req,res);
			var data = res._getData();

			it('responds with a greeting', () => {
				expect(data.greeting).toEqual(greeting);
			});
      
			it('responds with a greeting', () => {
				var day = yyz_hello.capitalizeFirstLetter(req.path.split('/hello/')[1]);
				expect(data.dayOfWeek).toEqual(yyz_hello.capitalizeFirstLetter(day));
			});

			it('gets a 200 status', () => {
				expect(res.statusCode).toBe(200);
			});

			it('gets a JSON response', () => {
				expect(yyz_hello.checkIfJSON(data)).toBe(true);
			});
		});
	});
});
