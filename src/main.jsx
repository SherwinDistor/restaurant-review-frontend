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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />,
		loader: getAllRestaurants,
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
		children: [
			{
				path: 'details',
				element: <Details />,
			},
		],
	},
	{
		path: '/review/:restaurantId',
		element: <WriteReview />,
		action: postReviewByRestaurant,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
