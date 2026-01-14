import { Navigate, Outlet, useLocation } from 'react-router';
import { jwtDecode } from 'jwt-decode';
import NotFound from './NotFound';
import useAuth from '../hooks/useAuth';
import useIsJwtExpired from '../hooks/useIsJwtExpired';

export default function ProtectedRoute({ allowedRoles }) {
	const { auth, setAuth } = useAuth();
	const location = useLocation();
	const decoded = auth?.jwt ? jwtDecode(auth.jwt) : null;
	const isJwtExpired = useIsJwtExpired(decoded?.exp);

	if (!auth) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	if (isJwtExpired) {
		localStorage.removeItem('userData');
		setAuth(null);
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	if (allowedRoles.find((role) => decoded?.roles?.includes(role))) {
		return <Outlet />;
	}

	return <NotFound />;
}
