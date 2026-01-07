import { redirect } from 'react-router';
import RegisterUserDto from '../domain/RegisterUserDto';
import BASE_URL from '../loaders/baseUrl';
import ErrorResponse from '../domain/ErrorResponse';

export default async function registerUser({ request }) {
	const formData = await request.formData();

	const newUser = new RegisterUserDto(
		formData.get('firstName'),
		formData.get('lastName'),
		formData.get('username'),
		formData.get('password')
	);

	console.log(newUser);

	// User input validation
	if (newUser.firstName.length <= 0) {
		return new ErrorResponse('First name field cannot be empty.');
	} else if (newUser.lastName.length <= 0) {
		return new ErrorResponse('Last name field cannot be empty.');
	} else if (newUser.username.length <= 0) {
		return new ErrorResponse('Email field cannot be empty.');
	} else if (newUser.password.length <= 0) {
		return new ErrorResponse('Password field cannot be empty.');
	}

	try {
		await fetch(`${BASE_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});
	} catch (error) {
		console.log(error);

		return new ErrorResponse('Network error, please try again.');
	}

	return redirect('/profile');
}
