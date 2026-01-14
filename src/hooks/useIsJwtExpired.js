export default function useIsJwtExpired(expiry) {
	if (!expiry) {
		return true;
	}

	const expiryMilli = expiry * 1000;

	return expiryMilli < Date.now();
}
