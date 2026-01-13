import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppInitializer from './components/AppInitializer';
// import { createBrowserRouter, RouterProvider } from 'react-router';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import getAllRestaurants from './loaders/getAllRestaurants';
// import Restaurant from './components/Restaurant';
// import getRestaurant from './loaders/getRestaurant';
// import UpdateRestaurant from './components/UpdateRestaurant';
// import Search from './components/Search';
// import WriteReview from './components/WriteReview';
// import NotFound from './components/NotFound';
// import postReviewByRestaurant from './actions/postReviewByRestaurant';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import registerUser from './actions/registerUser';
// import AuthProvider from './context/AuthProvider';
// import loginUser from './actions/loginUser';
// import ProtectedRoute from './components/ProtectedRoute';
// import AddRestaurant from './components/AddRestaurant';
// import createNewRestaurant from './actions/createNewRestaurant';
// import updateRestaurant from './actions/updateRestaurant';
// import BASE_URL from './loaders/baseUrl';
// import Loading from './components/Loading';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<AppInitializer />
		</AuthProvider>
	</StrictMode>
);
