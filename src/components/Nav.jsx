import { Link } from 'react-router';

export default function Nav() {
	return (
		<>
			<header>
				<nav className='z-100 w-screen h-18 pt-2 px-2 backdrop-blur-lg bg-gray/70 flex justify-evenly fixed bottom-0 sm:top-0'>
					<Link to='/' className='text-xs flex flex-col items-center w-full'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M320-200h60v-270q26-8 43-28.5t17-49.5v-152q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v152q0 29 17 49.5t43 28.5v270Zm240 0h60v-254q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v254ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z' />
						</svg>
						Discover
					</Link>
					<Link
						to='/search'
						className='text-xs flex flex-col items-center w-full'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' />
						</svg>
						Search
					</Link>
					<Link
						to='/profile'
						className='text-xs flex flex-col items-center w-full'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z' />
						</svg>
						Account
					</Link>
				</nav>
			</header>
		</>
	);
}
