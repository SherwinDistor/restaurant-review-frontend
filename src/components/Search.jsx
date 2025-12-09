import { useEffect, useState } from 'react';
import Nav from './Nav';
import BASE_URL from '../loaders/baseUrl';
import { Link } from 'react-router';

export default function Search() {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		async function getSearchResults() {
			if (search == '') {
				setSearchResults([]);
				return;
			}

			const response = await fetch(
				`${BASE_URL}/api/v1/restaurant/search?keyword=${search}`
			);
			const data = await response.json();

			setSearchResults(data);
		}

		getSearchResults();
	}, [search]);

	function handleSearchChange(e) {
		setSearch(e.target.value);
	}

	return (
		<>
			<Nav />
			<section className='px-4 pt-10'>
				<div className='mb-3'>
					<h1>Search</h1>
				</div>
				<div className='bg-white rounded-lg flex items-center px-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 640 640'
						className='fill-gray h-6 w-6'
					>
						<path d='M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z' />
					</svg>
					<input
						className=' px-2 py-1 text-gray w-full'
						type='text'
						placeholder='Find restaurants, food, or places'
						value={search}
						onChange={handleSearchChange}
					/>
				</div>
			</section>
			<section className='px-7'>
				{searchResults.map((result) => (
					<Link
						to={`/restaurant/${result.id}`}
						key={result.id}
						className='flex justify-between border-b border-white py-2'
					>
						<div>{result.name}</div>
						<div>{result.cuisineType}</div>
					</Link>
				))}
			</section>
		</>
	);
}
