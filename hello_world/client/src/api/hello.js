import axios from 'axios';

const getGreeting  = async () => {
	const response = await axios.get('api/hello?json');
	if (response.status !== 200) throw Error(response.data.message);
	return response;
};

export { getGreeting };
