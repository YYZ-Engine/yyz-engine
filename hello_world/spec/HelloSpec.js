const httpMocks = require('node-mocks-http');
const yyz_hello = require('../libs/yyz-hello');

describe('helper functions', () => {

  describe('capitalizeFirstLetter(string)', () => {
    let day = 'monday'

    let capitalizedString = yyz_hello.capitalizeFirstLetter(day);

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
    let x = yyz_hello.checkIfJSON('x');
    let y = yyz_hello.checkIfJSON({'apple':'orange'});
    let z = yyz_hello.checkIfJSON({'apple':3});
    let a = yyz_hello.checkIfJSON({});
    let b = yyz_hello.checkIfJSON('');
    let c = yyz_hello.checkIfJSON();

    it('checks if "x" is JSON', () => {
      expect(x).toBe(false);
    });

    it('checks if "y" is JSON', () => {
      expect(y).toBe(true);
    });

    it('checks if "z" is JSON', () => {
      expect(z).toBe(true);
    });

    it('checks if "a" is JSON', () => {
      expect(a).toBe(true);
    });

    it('checks if "b" is JSON', () => {
      expect(b).toBe(false);
    });

    it('checks if "c" is JSON', () => {
      expect(c).toBe(false);
    });

  });

  describe('greetingResponse()', () => {
    yyz_hello.greetingResponse();
    let date = yyz_hello.greetingResponse().date;
    let hour = yyz_hello.greetingResponse().hour;

    it('has an date', () => {
      expect(date).toBeDefined();
    });

    it('has an hour', () => {
      expect(hour).toBe(date.getHours());
    });

    it('has a greeting', () => {
      let greeting = '';
      if (hour > 3 && hour < 12) {
        greeting = 'Good Morning'
      } else if (hour >= 12 && hour < 20) {
        greeting = 'Good Afternoon'
      } else if (hour >= 20 || hour <= 3) {
        greeting = 'Good Evening'
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

    let date = yyz_hello.greetingResponse().date;
    let hour = yyz_hello.greetingResponse().hour;
    let greeting = yyz_hello.greetingResponse().greeting;
    let dayOfWeek = yyz_hello.greetingResponse().dayOfWeek;

    it('gets the date from calling getGreeting ', () => {
      expect(date).toBeDefined();
    });

    it('gets the hour from calling getGreeting ', () => {
      expect(hour).toBeDefined();
    });

    it('gets the greeting from calling getGreeting ', () => {
      expect(greeting).toBeDefined();
    });

    it('gets the day from calling getGreeting ', () => {
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

    let date = yyz_hello.greetingResponse().date;
    let hour = yyz_hello.greetingResponse().hour;
    let greeting = yyz_hello.greetingResponse().greeting;
    let dayOfWeek = yyz_hello.greetingResponse().dayOfWeek;

    it('gets the date from calling getGreeting ', () => {
      expect(date).toBeDefined();
    });

    it('gets the hour from calling getGreeting ', () => {
      expect(hour).toBeDefined();
    });

    it('gets the greeting from calling getGreeting ', () => {
      expect(greeting).toBeDefined();
    });

    it('gets the day from calling getGreeting ', () => {
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

    it('responds with a greeting and day', function(done) {
      res.on('end', function() {
        var response = ({'greeting': greeting, 'dayOfWeek': dayOfWeek});
        expect(res._getData()).toEqual(response);
        done();
      });

      yyz_hello.getGreeting(req,res);
    });

    it('gets a 200 status', () => {
      expect(res.statusCode).toBe(200);
    });

    it('gets a JSON response', () => {
      expect(yyz_hello.checkIfJSON(res._getData())).toBe(true);
    });
  });
});
