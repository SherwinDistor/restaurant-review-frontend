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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
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
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
