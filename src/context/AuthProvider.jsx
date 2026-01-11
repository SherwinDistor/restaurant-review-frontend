import { useState } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }) {
	const [auth, setAuth] = useState(() => {
		const savedAuth = localStorage.getItem('userData');
		if (savedAuth) {
			return JSON.parse(savedAuth);
		}
		return null;
	});

	return <AuthContext value={{ auth, setAuth }}>{children}</AuthContext>;
}
