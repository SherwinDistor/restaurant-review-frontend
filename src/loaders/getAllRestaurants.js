import BASE_URL from './baseUrl';

export default async function getAllRestaurants() {
	return await fetch(`${BASE_URL}/api/v1/restaurant`);
}
