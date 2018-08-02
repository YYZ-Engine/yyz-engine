const httpMocks = require('node-mocks-http');

describe('history of requests module', () => {
	describe('/api/requests', () => {
		var req  = httpMocks.createRequest({
			method: 'GET',
			port: '5000',
			url: '/api/requests',
		});

		var res = httpMocks.createResponse({
			eventEmitter: require('events').EventEmitter
		});

		var requests = ({'requests':[]});

		const getRequestHistory = (req,res) => {
			var date = new Date;
			requests['requests'].push({'timestamp': date.toLocaleString(), 'requestURL': req.url});
			res.send(requests);
			return requests;
		};

		it('gets request URL', () => {
			expect(req.url).toBeDefined();
		});

		requests = getRequestHistory(req,res);
		var data = res._getData();

		it('gets a 200 status', () => {
			expect(res.statusCode).toBe(200);
		});

		it('gets a timestamp', () => {
			expect(data['requests'][0]['timestamp']).toBe(requests['requests'][0]['timestamp']);
		});
  
		it('gets a request URL', () => {
			expect(data['requests'][0]['requestURL']).toBe(requests['requests'][0]['requestURL']);
		});

	});
});
