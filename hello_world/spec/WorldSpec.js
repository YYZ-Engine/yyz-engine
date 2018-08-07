const ip2countrify = require('ip2countrify');
const publicIp = require('public-ip');

describe('get location module', () => {
	describe('/api/world', () => {
		it('get location from IPv6', function( done ) {
			publicIp.v6().then(ip => {
				ip2countrify.lookup(
					ip,
					function( ip, results ) {
						var country = results.countryName;
						expect(country).toBe('United States');
						done();
					}
				);
			});
		});
	});

	describe('/api/world?json', () => {
		it('get location from IPv6', function( done ) {
			publicIp.v6().then(ip => {
				ip2countrify.lookup(
					ip,
					function( ip, results ) {
						var response = ({'country': results.countryName});
						expect(response.country).toBe('United States');
						done();
					}
				);
			});
		});
	});
});
