import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import getAllRestaurants from './loaders/getAllRestaurants';
import Restaurant from './components/Restaurant';
import getRestaurant from './loaders/getRestaurant';
import Details from './components/Details';
import Search from './components/Search';
import WriteReview from './components/WriteReview';
import NotFound from './components/NotFound';
import postReviewByRestaurant from './actions/postReviewByRestaurant';
import Login from './components/Login';
import SignUp from './components/SignUp';
import registerUser from './actions/registerUser';
import AuthProvider from './context/AuthProvider';
import loginUser from './actions/loginUser';

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
		path: '/profile',
		element: <Profile />,
	},
	{
		path: '/restaurant/:restaurantId',
		element: <Restaurant />,
		loader: getRestaurant,
	},
	{
		path: '/review/:restaurantId',
		element: <WriteReview />,
		action: postReviewByRestaurant,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
