import { useState } from 'react';

export default function Details({ isOpen, setIsOpen, restaurant }) {
	const [trans, setTrans] = useState(isOpen);

	function closeDetails() {
		setTrans(false);
		setTimeout(() => {
			setIsOpen(false);
		}, 500);
	}

	function formatTo12Hr(timeString) {
		if (!timeString) {
			return '';
		}

		let [hours, minutes] = timeString.split(':').map((time) => Number(time));
		let suffix;

		if (hours >= 12) {
			suffix = 'PM';
		} else {
			suffix = 'AM';
		}

		hours = hours % 12 || 12;
		const minutesString = minutes.toString().padStart(2, '0');

		return `${hours}:${minutesString} ${suffix}`;
	}

	return (
		<>
			<div
				className={`bg-gray fixed bottom-0 left-0 h-[90%] w-full rounded-t-lg ${
					trans ? 'animate-slideInUp' : 'animate-slideOutDown'
				}`}
			>
				<button
					onClick={closeDetails}
					className='flex justify-center py-3 w-full'
				>
					<div className='w-[50%] h-1 bg-white rounded-full'></div>
				</button>
				<section className='px-5 flex flex-col gap-5 mt-5'>
					<div className=''>
						<h1>Hours</h1>
						{restaurant.operatingHours.timeRanges.map((time) => (
							<div key={time.id} className='flex justify-between px-2'>
								<span>{time.dayOfWeek}</span>
								<span>
									{formatTo12Hr(time.openingTime)} -{' '}
									{formatTo12Hr(time.closingTime)}
								</span>
							</div>
						))}
					</div>
					<div>
						<h1>Address</h1>
						<address className='pl-2'>
							{restaurant.address.streetName} <br />
							{restaurant.address.city}, {restaurant.address.state}{' '}
							{restaurant.address.zipCode} <br />
							{restaurant.address.country}
						</address>
					</div>
					<div>
						<h1>Phone Number</h1>
						<span className='pl-2'>{restaurant.phoneNumber}</span>
					</div>
				</section>
			</div>
		</>
	);
}
