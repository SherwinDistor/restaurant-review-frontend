import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import NotFound from './NotFound';

export default function ProtectedRoute({ allowedRoles }) {
	const { auth } = useContext(AuthContext);
	const location = useLocation();
	let decoded;

	if (auth) {
		decoded = jwtDecode(auth.jwt);
	}

	if (auth && allowedRoles.find((role) => decoded.roles.includes(role))) {
		return <Outlet />;
	}

	return auth ? (
		<NotFound />
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
}
