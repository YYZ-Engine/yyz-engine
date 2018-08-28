import axios from 'axios';

const getCountry = async () => {
	const response = await axios.get('api/world?json');
	if (response.status !== 200) throw Error(response.data.message);
	return response;
};

export { getCountry };
