import axios from 'axios';

jest.mock('axios');

describe('renders response from Hello API call',() => {
	test('load a response', () => {
		const response = {data: [{greeting: 'Good Morning', dayOfWeek: 'Monday'}]};
		axios.get.mockResolvedValue(response);
		return axios.get('api/hello?json').then(data=>{
			expect(data).toBeDefined();
			expect(data.greeting).toEqual(response.data.greeting);
			expect(data.dayOfWeek).toEqual(response.data.dayOfWeek);
		});
	});
});
