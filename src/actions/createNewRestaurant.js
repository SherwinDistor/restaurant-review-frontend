import Address from '../domain/Address';
import CreateRestaurantDto from '../domain/CreateRestaurantDto';
import OperatingHours from '../domain/OperatingHours';
import TimeRange from '../domain/TimeRange';
import BASE_URL from '../loaders/baseUrl';
import DAY_OF_WEEK from '../domain/dayOfWeek';

export default async function createNewRestaurant({ request }) {
	const formData = await request.formData();

	const token = formData.get('token');

	const address = new Address(
		formData.get('streetAddress'),
		formData.get('unit'),
		formData.get('city'),
		formData.get('state'),
		formData.get('zipCode'),
		formData.get('country')
	);

	const timeRanges = [];

	DAY_OF_WEEK.map((day) => {
		const timeRange = new TimeRange(
			day,
			formData.get(`${day.toLowerCase()}OpeningTime`),
			formData.get(`${day.toLowerCase()}ClosingTime`)
		);

		timeRanges.push(timeRange);
	});

	const operatingHours = new OperatingHours(timeRanges);

	const restaurant = new CreateRestaurantDto(
		formData.get('name'),
		formData.get('cuisineType'),
		formData.get('phoneNumber'),
		address,
		operatingHours
	);

	const file = formData.get('file');
	const imagePayload = new FormData();
	imagePayload.append('file', file);

	try {
		const response = await fetch(`${BASE_URL}/api/v1/restaurant`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(restaurant),
		});

		const data = await response.json();

		await fetch(`${BASE_URL}/api/v1/photo/${data.id}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: imagePayload,
		});
	} catch (error) {
		console.log(error);
	}
}
