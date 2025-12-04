import BASE_URL from './baseUrl';

export default async function getRestaurant({ params }) {
	return await fetch(`${BASE_URL}/api/v1/restaurant/${params.restaurantId}`);
}
