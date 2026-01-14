import { Link } from 'react-router';

export default function NotFound() {
	return (
		<>
			<div className='h-screen w-full flex justify-center flex-col items-center gap-4'>
				<h1>404 Page Not Found</h1>
				<Link to='/' className='bg-amber-500 rounded-lg p-2'>
					Home
				</Link>
			</div>
		</>
	);
}
