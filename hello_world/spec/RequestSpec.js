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

		it('gets URL from the request', () => {
			expect(req.url).toBeDefined();
		});

		requests = getRequestHistory(req,res);
		var data = res._getData();

		it('gets a 200 status', () => {
			expect(res.statusCode).toBe(200);
		});

		it('expects response to include a timestamp when the last request was made', () => {
			expect(data['requests'][0]['timestamp']).toBe(requests['requests'][0]['timestamp']);
		});
  
		it('expects response to include  the URL of the last request on the server', () => {
			expect(data['requests'][0]['requestURL']).toBe(requests['requests'][0]['requestURL']);
		});

	});
});
