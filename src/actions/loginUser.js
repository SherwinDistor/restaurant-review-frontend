import LoginRequest from '../domain/LoginRequestDto';
import BASE_URL from '../loaders/baseUrl';
import ErrorResponse from '../domain/ErrorResponse';

export default async function loginUser({ request }) {
	const formData = await request.formData();

	console.log(formData);

	const redirectTo = formData.get('redirectTo');

	const loginRequest = new LoginRequest(
		formData.get('username'),
		formData.get('password')
	);

	try {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginRequest),
		});

		const data = await response.json();

		localStorage.setItem('userData', JSON.stringify(data));

		console.log(data);
		return { userData: data, redirectTo };
	} catch (error) {
		console.log(error);

		return new ErrorResponse(
			'Network error or invalid credentials. Please try again.'
		);
	}
}
