import { redirect } from 'react-router';
import CreateReviewDto from '../domain/CreateReviewDto';
import BASE_URL from '../loaders/baseUrl';

export default async function postReviewByRestaurant({ request, params }) {
	const formData = await request.formData();
	const token = formData.get('token');

	const review = new CreateReviewDto(
		formData.get('title'),
		formData.get('content'),
		formData.get('rating')
	);

	try {
		// Add authentication to send to POST
		await fetch(`${BASE_URL}/api/v1/review/restaurant/${params.restaurantId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(review),
		});
	} catch (error) {
		// TODO: return an error object to use in the frontend to let the user know the validation, useActionData() on the review page
		console.log(error);
	}

	return redirect('/');
}
