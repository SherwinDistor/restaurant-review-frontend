import { useLoaderData } from 'react-router';
import Nav from './Nav';
import { useState } from 'react';
import StarRating from './StarRating';

export default function Restaurant() {
	const data = useLoaderData();
	const [restaurant, setRestaurant] = useState({ ...data });

	console.log(restaurant);

	return (
		<>
			<Nav />
			<section className='h-96 w-full'>
				<div className='bg-white w-full h-full'></div>
			</section>
			<section className='px-4'>
				<div className='flex justify-between'>
					<div>
						<h1 className='py-1'>{restaurant.name}</h1>
						<div className='flex gap-2'>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-amber-500 h-4 w-4'
								>
									<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
								</svg>
								<p>{restaurant.averageRating} (3)</p>
							</div>
							<p>{restaurant.cuisineType}</p>
						</div>
						<div className='flex items-center gap-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 640 640'
								className='fill-gray-500 h-4 w-4'
							>
								<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
							</svg>
							<p>{restaurant.address.city}</p>
						</div>
					</div>
					<div className='self-center'>
						<button className='flex items-center bg-amber-500 pl-2 py-1 rounded-lg'>
							<span>Details</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 640 640'
								className='fill-white h-5 w-5'
							>
								<path d='M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z' />
							</svg>
						</button>
					</div>
				</div>
			</section>
			<section className='mt-5'>
				<div className='flex flex-col items-center gap-1'>
					<h1>Reviews</h1>
					<StarRating rating={restaurant.averageRating} />
					<p>5 Total Reviews</p>
					<button className='border border-white rounded-full px-3 py-1 hover:bg-gray mt-1'>
						Write a review
					</button>
				</div>
			</section>
			<section className='border-t border-white mt-6'>
				<button>Sort</button>
			</section>
		</>
	);
}
