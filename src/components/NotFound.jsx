import { Link } from 'react-router';

export default function NotFound() {
	return (
		<>
			<div className='h-screen w-full flex justify-center flex-col items-center'>
				<h1>404 Page Not Found</h1>
				<Link to='/' className=''>
					Home
				</Link>
			</div>
		</>
	);
}
