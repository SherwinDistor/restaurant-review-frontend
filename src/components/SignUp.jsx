export default function SignUp() {
	return (
		<>
			<section className='h-screen w-screen flex justify-center items-center'>
				<form action='' className='flex flex-col text-black gap-5'>
					<div>
						<label htmlFor='' className='hidden'>
							First name
						</label>
						<input
							type='text'
							placeholder='First name'
							className='px-2 py-2 rounded-lg'
						/>
					</div>

					<div>
						<label htmlFor='' className='hidden'>
							Last name
						</label>
						<input
							type='text'
							placeholder='Last name'
							className='px-2 py-2 rounded-lg'
						/>
					</div>

					<div>
						<label htmlFor='' className='hidden'>
							Email
						</label>
						<input
							type='email'
							placeholder='Email'
							className='px-2 py-2 rounded-lg'
						/>
					</div>

					<div>
						<label htmlFor='' className='hidden'>
							Password
						</label>
						<input
							type='password'
							name=''
							id=''
							placeholder='Password'
							className='px-2 py-2 rounded-lg'
						/>
					</div>

					<div>
						<label htmlFor='' className='hidden'>
							Confirm password
						</label>
						<input
							type='password'
							name=''
							id=''
							placeholder='Confirm password'
							className='px-2 py-2 rounded-lg'
						/>
					</div>

					<button className='bg-amber-500 text-white rounded-full py-1'>
						Create account
					</button>
				</form>
			</section>
		</>
	);
}
