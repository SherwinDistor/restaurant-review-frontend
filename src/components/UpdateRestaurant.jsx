import { Form, Link, useLoaderData } from 'react-router';
import Nav from './Nav';
import DAY_OF_WEEK from '../domain/dayOfWeek';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function UpdateRestaurant() {
	const restaurant = useLoaderData();
	const { auth } = useContext(AuthContext);

	return (
		<>
			<Nav />
			<div className='flex flex-col gap-4 justify-center items-center my-20'>
				<div className='w-60'>
					<Link to={`/restaurant/${restaurant.id}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 640 640'
							className='h-7 w-12 fill-white border rounded-full px-2'
						>
							<path d='M41.4 297.4C28.9 309.9 28.9 330.2 41.4 342.7L169.4 470.7C181.9 483.2 202.2 483.2 214.7 470.7C227.2 458.2 227.2 437.9 214.7 425.4L141.3 352L576 352C593.7 352 608 337.7 608 320C608 302.3 593.7 288 576 288L141.3 288L214.7 214.6C227.2 202.1 227.2 181.8 214.7 169.3C202.2 156.8 181.9 156.8 169.4 169.3L41.4 297.3z' />
						</svg>
					</Link>
				</div>
				<Form
					method='put'
					action={`/restaurant/update/${restaurant.id}`}
					className='flex flex-col gap-3 text-black w-60'
					encType='multipart/form-data'
				>
					<input type='hidden' name='token' value={auth?.jwt} />

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Restaurant Name *</span>
						<input
							type='text'
							name='name'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.name}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Cuisine Type *</span>
						<input
							type='text'
							name='cuisineType'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.cuisineType}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Phone Number *</span>
						<input
							type='text'
							name='phoneNumber'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.phoneNumber}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Street Address *</span>
						<input
							type='text'
							name='streetAddress'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.address.streetName}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Unit (Optional)</span>
						<input
							type='text'
							name='unit'
							className='rounded-lg p-1'
							defaultValue={restaurant.address.unit}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>City *</span>
						<input
							type='text'
							name='city'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.address.city}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>State *</span>
						<input
							type='text'
							name='state'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.address.state}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Zip Code *</span>
						<input
							type='text'
							name='zipCode'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.address.zipCode}
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Country *</span>
						<input
							type='text'
							name='country'
							className='rounded-lg p-1'
							required
							defaultValue={restaurant.address.country}
						/>
					</label>

					{DAY_OF_WEEK.map((day) => {
						const dayTimeRange = restaurant.operatingHours.timeRanges.find(
							(timeRange) => timeRange.dayOfWeek === day
						);

						const dayLower = day.toLowerCase();

						return (
							<fieldset key={day}>
								<label className='flex flex-col'>
									<span className='text-white font-medium capitalize'>{`${dayLower} Hours`}</span>
									<input
										type='time'
										name={`${dayLower}OpeningTime`}
										className='rounded-lg p-1 mb-2'
										defaultValue={dayTimeRange?.openingTime}
									/>
									<input
										type='time'
										name={`${dayLower}ClosingTime`}
										className='rounded-lg p-1'
										defaultValue={dayTimeRange?.closingTime}
									/>
								</label>
							</fieldset>
						);
					})}

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Image (Max: 10MB)</span>
						<input type='file' name='file' className='rounded-lg p-1' />
					</label>

					<button className='bg-white rounded-full w-30 self-center py-1'>
						Update
					</button>
				</Form>
			</div>
		</>
	);
}
