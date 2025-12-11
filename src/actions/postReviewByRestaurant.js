import CreateReviewDto from '../domain/CreateReviewDto';
import BASE_URL from '../loaders/baseUrl';

export default async function postReviewByRestaurant({ request, params }) {
	const data = await request.formData();

	const review = new CreateReviewDto(
		data.get('title'),
		data.get('content'),
		data.get('rating')
	);

	try {
		await fetch(`${BASE_URL}/api/v1/review/restaurant/${params.restaurantId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(review),
		});
	} catch (error) {
		console.log(error);
	}
}
