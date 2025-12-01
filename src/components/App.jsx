import './App.css';
import Keycloak from 'keycloak-js';

function App() {
	const keycloak = new Keycloak({
		url: import.meta.env.VITE_PUBLIC_KEYCLOAK_URL,
		realm: import.meta.env.VITE_PUBLIC_KEYCLOAK_REALM,
		clientId: import.meta.env.VITE_PUBLIC_KEYCLOAK_CLIENT_ID,
	});

	async function handleLogin() {
		try {
			const authenticated = await keycloak.init({ onLoad: 'login-required' });

			if (authenticated) {
				console.log('User is authenticated');
			} else {
				console.log('User is not authenticated');
			}
		} catch (error) {
			console.error('Failed to initialize adapter:', error);
		}
	}

	return (
		<>
			<button onClick={handleLogin}>Log In</button>
		</>
	);
}

export default App;
