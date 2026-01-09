import { Form, Link } from 'react-router';
import Nav from './Nav';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AddRestaurant() {
	const { auth } = useContext(AuthContext);

	return (
		<>
			<Nav />
			<div className='flex flex-col gap-4 justify-center items-center my-20'>
				<div className='w-60'>
					<Link to={`/profile`}>
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
					method='post'
					action='/restaurant/add'
					className='flex flex-col gap-3 text-black w-60'
					encType='multipart/form-data'
				>
					<input type='hidden' name='token' value={auth?.jwt} />

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Restaurant Name</span>
						<input type='text' name='name' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Cuisine Type</span>
						<input type='text' name='cuisineType' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Phone Number</span>
						<input type='text' name='phoneNumber' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Street Address</span>
						<input
							type='text'
							name='streetAddress'
							className='rounded-lg p-1'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Unit (Optional)</span>
						<input type='text' name='unit' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>City</span>
						<input type='text' name='city' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>State</span>
						<input type='text' name='state' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Zip Code</span>
						<input type='text' name='zipCode' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Country</span>
						<input type='text' name='country' className='rounded-lg p-1' />
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Monday Hours</span>
						<input
							type='time'
							name='mondayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='mondayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Tuesday Hours</span>
						<input
							type='time'
							name='tuesdayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='tuesdayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Wednesday Hours</span>
						<input
							type='time'
							name='wednesdayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='wednesdayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Thursday Hours</span>
						<input
							type='time'
							name='thursdayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='thursdayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Friday Hours</span>
						<input
							type='time'
							name='fridayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='fridayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Saturday Hours</span>
						<input
							type='time'
							name='saturdayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='saturdayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Sunday Hours</span>
						<input
							type='time'
							name='sundayOpeningTime'
							className='rounded-lg p-1'
							placeholder='Opening Time'
						/>
						<input
							type='time'
							name='sundayClosingTime'
							className='rounded-lg p-1'
							placeholder='Closing Time'
						/>
					</label>

					<label className='flex flex-col'>
						<span className='text-white font-medium'>Image</span>
						<input type='file' name='file' className='rounded-lg p-1' />
					</label>

					<button className='bg-white rounded-full w-30 self-center py-1'>
						Submit
					</button>
				</Form>
			</div>
		</>
	);
}
