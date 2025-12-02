import Restaurant from '../domain/restaurant';

export default function Home() {
	const send = new Restaurant('Taco Inn', '123-123-2345');
	send.name = 'Burger';

	return (
		<>
			<header className=''>
				<nav className='w-screen h-18 pt-2 backdrop-blur-lg bg-gray/70 flex justify-evenly fixed bottom-0 sm:top-0'>
					<div className='text-xs flex flex-col items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M320-200h60v-270q26-8 43-28.5t17-49.5v-152q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-30v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v152q0 29 17 49.5t43 28.5v270Zm240 0h60v-254q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v254ZM160-80q-33 0-56.5-23.5T80-160v-640q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v640q0 33-23.5 56.5T800-80H160Zm0-80h640v-640H160v640Zm0 0v-640 640Z' />
						</svg>
						Discover
					</div>
					<div className='text-xs flex flex-col items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' />
						</svg>
						Search
					</div>
					<div className='text-xs flex flex-col items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 -960 960 960'
							className='fill-white h-6 w-6'
						>
							<path d='M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z' />
						</svg>
						Account
					</div>
				</nav>
			</header>
			<section>
				<div className='flex flex-col items-center gap-10 mt-10'>
					<div className='w-80'>
						<div className='h-40 w-full bg-white rounded-lg'></div>
						<div>
							<h1 className='py-1'>Taco Inn</h1>
							<div className='flex gap-2'>
								<div className='flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 640'
										className='fill-amber-500 h-4 w-4'
									>
										<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
									</svg>
									<p>5.0 (3)</p>
								</div>
								<p>Mexican</p>
							</div>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4'
								>
									<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
								</svg>
								<p>Sioux Falls</p>
							</div>
						</div>
					</div>
					<div className='w-80'>
						<div className='h-40 w-full bg-white rounded-lg'></div>
						<div>
							<h1 className='py-1'>Taco Inn</h1>
							<div className='flex gap-2'>
								<div className='flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 640'
										className='fill-amber-500 h-4 w-4'
									>
										<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
									</svg>
									<p>5.0 (3)</p>
								</div>
								<p>Mexican</p>
							</div>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4'
								>
									<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
								</svg>
								<p>Sioux Falls</p>
							</div>
						</div>
					</div>
					<div className='w-80'>
						<div className='h-40 w-full bg-white rounded-lg'></div>
						<div>
							<h1 className='py-1'>Taco Inn</h1>
							<div className='flex gap-2'>
								<div className='flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 640'
										className='fill-amber-500 h-4 w-4'
									>
										<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
									</svg>
									<p>5.0 (3)</p>
								</div>
								<p>Mexican</p>
							</div>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4'
								>
									<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
								</svg>
								<p>Sioux Falls</p>
							</div>
						</div>
					</div>
					<div className='w-80'>
						<div className='h-40 w-full bg-white rounded-lg'></div>
						<div>
							<h1 className='py-1'>Taco Inn</h1>
							<div className='flex gap-2'>
								<div className='flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 640'
										className='fill-amber-500 h-4 w-4'
									>
										<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
									</svg>
									<p>5.0 (3)</p>
								</div>
								<p>Mexican</p>
							</div>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4'
								>
									<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
								</svg>
								<p>Sioux Falls</p>
							</div>
						</div>
					</div>
					<div className='w-80'>
						<div className='h-40 w-full bg-white rounded-lg'></div>
						<div>
							<h1 className='py-1'>Taco Inn</h1>
							<div className='flex gap-2'>
								<div className='flex items-center gap-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 640 640'
										className='fill-amber-500 h-4 w-4'
									>
										<path d='M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z' />
									</svg>
									<p>5.0 (3)</p>
								</div>
								<p>Mexican</p>
							</div>
							<div className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4'
								>
									<path d='M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z' />
								</svg>
								<p>Sioux Falls</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
