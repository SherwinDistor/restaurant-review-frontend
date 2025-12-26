export default function Login() {
	return (
		<>
			<section className='h-screen w-screen flex justify-center items-center'>
				<form action='' className='flex flex-col text-black gap-5'>
					<div>
						<label htmlFor='' className='hidden'>
							Email
						</label>
						<input
							type='email'
							placeholder='Username or email'
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

					<button className='bg-amber-500 text-white rounded-full py-1'>
						Log in
					</button>
				</form>

				<button className='border-2 border-amber-500 text-white rounded-full py-1 absolute bottom-20 w-[233px]'>
					Create an account
				</button>
			</section>
		</>
	);
}
