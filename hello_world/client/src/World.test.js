import axios from 'axios';

jest.mock('axios');

describe('renders response from World API call',() => {
	test('load a response', () => {
		const response = {data: [{country: 'United States'}]};
		axios.get.mockResolvedValue(response);
		return axios.get('api/world?json').then(data=>{
			expect(data).toBeDefined();
			expect(data.country).toEqual(response.data.country);
		});
	});
});
