import { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { AuthContext } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router';
import BASE_URL from '../loaders/baseUrl';
import StarRating from './StarRating';

export default function Profile() {
	const { auth, setAuth } = useContext(AuthContext);
	const [profile, setProfile] = useState();
	let decoded;

	if (auth) {
		decoded = jwtDecode(auth.jwt);
	}

	useEffect(() => {
		async function getUserProfile() {
			try {
				const response = await fetch(`${BASE_URL}/api/v1/user/profile`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${auth?.jwt}`,
					},
				});

				const data = await response.json();

				setProfile(data);
			} catch (error) {
				console.log(error);
			}
		}

		getUserProfile();
	}, [auth]);

	function logoutUser() {
		localStorage.removeItem('userData');
		setAuth(null);
	}

	return (
		<>
			<Nav />
			<section className='flex justify-between px-4 pt-4 sm:mt-20'>
				{decoded?.roles.startsWith('ADMIN') ? (
					<Link
						to='/restaurant/add'
						className='bg-amber-500 rounded-lg px-2 py-1'
					>
						Add restaurant
					</Link>
				) : (
					<button></button>
				)}
				<button
					onClick={logoutUser}
					className='bg-amber-500 rounded-lg px-2 py-1'
				>
					Log out
				</button>
			</section>
			<section className='flex justify-center pt-12'>
				<div className='flex items-center gap-5'>
					{/* <div className='h-24 w-24 bg-white rounded-full'></div> */}
					<div>
						<h1>
							{auth.restaurantUserDto.firstName}{' '}
							{auth.restaurantUserDto.lastName}
						</h1>
						<p className='text-center'>Reviews: {profile?.reviews.length}</p>
					</div>
				</div>
			</section>
			<section className='pt-20'>
				<div className='flex justify-center pb-5 border-b'>
					<h1>Past Reviews</h1>
				</div>
				<div className='mx-5 mt-5 flex flex-col gap-3 h-105 overflow-auto'>
					{profile &&
						profile.reviews.map((review) => (
							<div>
								<div>
									<div className='flex justify-between'>
										<h1>{review.title}</h1>
										<p>1/22/2025</p>
									</div>
									<StarRating rating={review.rating} size='small' />
								</div>
								<p>{review.content}</p>
							</div>
						))}
				</div>
			</section>
		</>
	);
}
