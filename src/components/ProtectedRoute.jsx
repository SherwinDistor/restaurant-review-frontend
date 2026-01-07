import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router';

export default function ProtectedRoute() {
	const { auth } = useContext(AuthContext);
	const location = useLocation();

	console.log('Protected route location', location);

	return auth ? (
		<Outlet />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
}
