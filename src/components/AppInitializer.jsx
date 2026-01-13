import { useEffect, useState } from 'react';
import BASE_URL from '../loaders/baseUrl';
import { createBrowserRouter } from 'react-router';
import getAllRestaurants from '../loaders/getAllRestaurants';
import registerUser from '../actions/registerUser';
import loginUser from '../actions/loginUser';
import getRestaurant from '../loaders/getRestaurant';
import postReviewByRestaurant from '../actions/postReviewByRestaurant';
import createNewRestaurant from '../actions/createNewRestaurant';
import updateRestaurant from '../actions/updateRestaurant';

export default function AppInitializer() {
	const [isAwake, setIsAwake] = useState(false);

	useEffect(() => {
		async function wakeServer() {
			try {
				const response = await fetch(`${BASE_URL}/auth/health`);
				if (response.ok) {
					setIsAwake(true);
				}
			} catch (error) {
				console.error(error);
			}
		}

		wakeServer();
	}, []);

	if (!isAwake) {
		return <Loading />;
	}

	return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
		loader: getAllRestaurants,
	},
	{
		path: '/signup',
		element: <SignUp />,
		action: registerUser,
	},
	{
		path: '/login',
		element: <Login />,
		action: loginUser,
	},
	{
		path: '/search',
		element: <Search />,
	},
	{
		path: '/restaurant/:restaurantId',
		element: <Restaurant />,
		loader: getRestaurant,
	},
	{
		path: '/',
		element: <ProtectedRoute allowedRoles={['USER', 'ADMIN']} />,
		children: [
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'review/:restaurantId',
				element: <WriteReview />,
				action: postReviewByRestaurant,
			},
		],
	},
	{
		path: '/',
		element: <ProtectedRoute allowedRoles={['ADMIN']} />,
		children: [
			{
				path: 'restaurant/add',
				element: <AddRestaurant />,
				action: createNewRestaurant,
			},
			{
				path: 'restaurant/update/:restaurantId',
				element: <UpdateRestaurant />,
				loader: getRestaurant,
				action: updateRestaurant,
			},
		],
	},
]);
