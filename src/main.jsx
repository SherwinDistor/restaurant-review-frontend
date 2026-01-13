import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import getAllRestaurants from './loaders/getAllRestaurants';
import Restaurant from './components/Restaurant';
import getRestaurant from './loaders/getRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';
import Search from './components/Search';
import WriteReview from './components/WriteReview';
import NotFound from './components/NotFound';
import postReviewByRestaurant from './actions/postReviewByRestaurant';
import Login from './components/Login';
import SignUp from './components/SignUp';
import registerUser from './actions/registerUser';
import AuthProvider from './context/AuthProvider';
import loginUser from './actions/loginUser';
import ProtectedRoute from './components/ProtectedRoute';
import AddRestaurant from './components/AddRestaurant';
import createNewRestaurant from './actions/createNewRestaurant';
import updateRestaurant from './actions/updateRestaurant';
// import Root from './components/Root';

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

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
// 		children: [
// 			{
// 				path: '/',
// 				element: <Home />,
// 				errorElement: <NotFound />,
// 				loader: getAllRestaurants,
// 			},
// 			{
// 				path: '/signup',
// 				element: <SignUp />,
// 				action: registerUser,
// 			},
// 			{
// 				path: '/login',
// 				element: <Login />,
// 				action: loginUser,
// 			},
// 			{
// 				path: '/search',
// 				element: <Search />,
// 			},
// 			{
// 				path: '/restaurant/:restaurantId',
// 				element: <Restaurant />,
// 				loader: getRestaurant,
// 			},
// 			{
// 				path: '/',
// 				element: <ProtectedRoute allowedRoles={['USER', 'ADMIN']} />,
// 				children: [
// 					{
// 						path: 'profile',
// 						element: <Profile />,
// 					},
// 					{
// 						path: 'review/:restaurantId',
// 						element: <WriteReview />,
// 						action: postReviewByRestaurant,
// 					},
// 				],
// 			},
// 			{
// 				path: '/',
// 				element: <ProtectedRoute allowedRoles={['ADMIN']} />,
// 				children: [
// 					{
// 						path: 'restaurant/add',
// 						element: <AddRestaurant />,
// 						action: createNewRestaurant,
// 					},
// 					{
// 						path: 'restaurant/update/:restaurantId',
// 						element: <UpdateRestaurant />,
// 						loader: getRestaurant,
// 						action: updateRestaurant,
// 					},
// 				],
// 			},
// 		],
// 	},
// ]);
