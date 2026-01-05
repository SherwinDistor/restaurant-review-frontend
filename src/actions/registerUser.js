import { redirect } from 'react-router';
import RegisterUserDto from '../domain/RegisterUserDto';
import BASE_URL from '../loaders/baseUrl';

export default async function registerUser({ request }) {
	const formData = await request.formData();

	console.log(formData);

	const newUser = new RegisterUserDto(
		formData.get('firstName'),
		formData.get('lastName'),
		formData.get('username'),
		formData.get('password')
	);

	console.log(newUser);

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
	}

	return redirect('/profile');
}
