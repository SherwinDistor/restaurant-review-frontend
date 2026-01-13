import { Link, useLoaderData } from 'react-router';
import Nav from './Nav';
import BASE_URL from '../loaders/baseUrl';

export default function Home() {
	const restaurantData = useLoaderData();

	return (
		<>
			<Nav />
			<section>
				<div className='flex flex-col items-center gap-10 mt-10 mb-25 sm:mt-25'>
					{restaurantData != null &&
						restaurantData.map((restaurant) => (
							<Link
								to={`/restaurant/${restaurant.id}`}
								className='w-80'
								key={restaurant.id}
							>
								<div className='w-full relative'>
									<div className='h-48 flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg bg-white'>
										{restaurant.photos.map((photo) => (
											<img
												src={photo.url}
												alt='img'
												className='snap-start grow shrink-0 basis-full object-cover'
												key={photo.id}
												id={photo.id}
											/>
										))}
									</div>
									<div className='flex gap-1 absolute bottom-2 left-[50%] translate-x-[-50%]'></div>
								</div>
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
											<p>
												{restaurant.averageRating} ({restaurant.reviews.length})
											</p>
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
							</Link>
						))}
				</div>
			</section>
		</>
	);
}
