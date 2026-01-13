import { useEffect, useState } from 'react';
import BASE_URL from '../loaders/baseUrl';
import Loading from './Loading';
import { Outlet } from 'react-router';

export default function Root() {
	const [isServerRunning, setIsServerRunning] = useState(false);

	useEffect(() => {
		async function wakeServer() {
			try {
				const response = await fetch(`${BASE_URL}/auth/health`);
				if (response.ok) {
					setIsServerRunning(true);
				}
			} catch (error) {
				console.error(error);
			}
		}

		wakeServer();
	}, []);

	if (!isServerRunning) {
		return <Loading />;
	}

	return <Outlet />;
}
