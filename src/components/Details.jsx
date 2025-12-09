import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function Details() {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	useEffect(() => {
		function changeState() {
			setIsDetailsOpen(true);
			console.log('run change');
		}
		changeState();
	}, []);

	return (
		<>
			<div
				className={`bg-gray fixed bottom-0 left-0 h-[90%] w-full rounded-t-lg ${
					isDetailsOpen ? 'animate-slideInUp' : 'animate-slideOutDown'
				}`}
			>
				<Link to='..' className='flex justify-center py-3'>
					<div className='w-[50%] h-1 bg-white rounded-full'></div>
				</Link>
			</div>
		</>
	);
}
