import { useEffect, useRef, useState } from 'react';
import { Form, Link, useActionData } from 'react-router';
import Nav from './Nav';

const EMAIL_REGEX =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;

export default function SignUp() {
	const formRequestResponse = useActionData();

	const firstNameRef = useRef();

	const [firstName, setFirstName] = useState('');

	const [lastName, setLastName] = useState('');

	const [email, setEmail] = useState('');
	const isValidEmail = EMAIL_REGEX.test(email);

	const [password, setPassword] = useState('');
	const isValidPassword = PASSWORD_REGEX.test(password);
	const [showPassword, setShowPassword] = useState(false);

	const [confirmPassword, setConfirmPassword] = useState('');
	const isValidConfirmPassword =
		password === confirmPassword && confirmPassword.length > 0;

	// const errorRef = useRef();
	// const [emailFocus, setEmailFocus] = useState(false);
	// const [passwordFocus, setPasswordFocus] = useState(false);
	// const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

	useEffect(() => {
		firstNameRef.current.focus();
	}, []);

	return (
		<>
			<Nav />
			<section className='h-screen w-screen flex flex-col justify-evenly items-center'>
				{formRequestResponse && formRequestResponse.message && (
					<p className='absolute top-30 bg-darkgray p-4 rounded-lg max-w-60'>
						{formRequestResponse.message}
					</p>
				)}
				<Form
					method='post'
					action='/signup'
					className='flex flex-col text-black gap-5'
				>
					<div>
						<label htmlFor='firstName' className='hidden'>
							First name
						</label>
						<input
							id='firstName'
							name='firstName'
							type='text'
							ref={firstNameRef}
							placeholder='First name'
							className='px-2 py-2 rounded-lg w-full'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>

					<div>
						<label htmlFor='lastName' className='hidden'>
							Last name
						</label>
						<input
							id='lastName'
							name='lastName'
							type='text'
							placeholder='Last name'
							className='px-2 py-2 rounded-lg w-full'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>

					<div>
						<label htmlFor='username' className='hidden'>
							Email
						</label>
						<input
							id='username'
							name='username'
							type='email'
							placeholder='Email'
							className={`px-2 py-2 rounded-lg w-full ${
								isValidEmail
									? 'border-2 border-green-400'
									: 'border-2 border-red-400'
							}`}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete='off'
							required
						/>
					</div>

					<div
						className={`px-2 py-2 rounded-lg bg-white flex ${
							isValidPassword
								? 'border-2 border-green-400'
								: 'border-2 border-red-400'
						}`}
					>
						<label htmlFor='password' className='hidden'>
							Password
						</label>
						<input
							type={showPassword ? 'text' : 'password'}
							name='password'
							id='password'
							placeholder='Password'
							className='w-48'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<button
							className='border-1 border-gray rounded-md w-6 h-6'
							onClick={(e) => {
								e.preventDefault();
								setShowPassword(!showPassword);
							}}
						>
							{showPassword ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4 m-auto'
								>
									<path d='M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L504.5 470.8C507.2 468.4 509.9 466 512.5 463.6C559.3 420.1 590.6 368.2 605.5 332.5C608.8 324.6 608.8 315.8 605.5 307.9C590.6 272.2 559.3 220.2 512.5 176.8C465.4 133.1 400.7 96.2 319.9 96.2C263.1 96.2 214.3 114.4 173.9 140.4L73 39.1zM208.9 175.1C241 156.2 278.1 144 320 144C385.2 144 438.8 173.6 479.9 211.7C518.4 247.4 545 290 558.5 320C544.9 350 518.3 392.5 479.9 428.3C476.8 431.1 473.7 433.9 470.5 436.7L425.8 392C439.8 371.5 448 346.7 448 320C448 249.3 390.7 192 320 192C293.3 192 268.5 200.2 248 214.2L208.9 175.1zM390.9 357.1L282.9 249.1C294 243.3 306.6 240 320 240C364.2 240 400 275.8 400 320C400 333.4 396.7 346 390.9 357.1zM135.4 237.2L101.4 203.2C68.8 240 46.4 279 34.5 307.7C31.2 315.6 31.2 324.4 34.5 332.3C49.4 368 80.7 420 127.5 463.4C174.6 507.1 239.3 544 320.1 544C357.4 544 391.3 536.1 421.6 523.4L384.2 486C364.2 492.4 342.8 496 320 496C254.8 496 201.2 466.4 160.1 428.3C121.6 392.6 95 350 81.5 320C91.9 296.9 110.1 266.4 135.5 237.2z' />
								</svg>
							) : (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 640 640'
									className='fill-gray-500 h-4 w-4 m-auto'
								>
									<path d='M320 144C254.8 144 201.2 173.6 160.1 211.7C121.6 247.5 95 290 81.4 320C95 350 121.6 392.5 160.1 428.3C201.2 466.4 254.8 496 320 496C385.2 496 438.8 466.4 479.9 428.3C518.4 392.5 545 350 558.6 320C545 290 518.4 247.5 479.9 211.7C438.8 173.6 385.2 144 320 144zM127.4 176.6C174.5 132.8 239.2 96 320 96C400.8 96 465.5 132.8 512.6 176.6C559.4 220.1 590.7 272 605.6 307.7C608.9 315.6 608.9 324.4 605.6 332.3C590.7 368 559.4 420 512.6 463.4C465.5 507.1 400.8 544 320 544C239.2 544 174.5 507.2 127.4 463.4C80.6 419.9 49.3 368 34.4 332.3C31.1 324.4 31.1 315.6 34.4 307.7C49.3 272 80.6 220 127.4 176.6zM320 400C364.2 400 400 364.2 400 320C400 290.4 383.9 264.5 360 250.7C358.6 310.4 310.4 358.6 250.7 360C264.5 383.9 290.4 400 320 400zM240.4 311.6C242.9 311.9 245.4 312 248 312C283.3 312 312 283.3 312 248C312 245.4 311.8 242.9 311.6 240.4C274.2 244.3 244.4 274.1 240.5 311.5zM286 196.6C296.8 193.6 308.2 192.1 319.9 192.1C328.7 192.1 337.4 193 345.7 194.7C346 194.8 346.2 194.8 346.5 194.9C404.4 207.1 447.9 258.6 447.9 320.1C447.9 390.8 390.6 448.1 319.9 448.1C258.3 448.1 206.9 404.6 194.7 346.7C192.9 338.1 191.9 329.2 191.9 320.1C191.9 309.1 193.3 298.3 195.9 288.1C196.1 287.4 196.2 286.8 196.4 286.2C208.3 242.8 242.5 208.6 285.9 196.7z' />
								</svg>
							)}
						</button>
					</div>

					<div>
						<label htmlFor='confirmPassword' className='hidden'>
							Confirm password
						</label>
						<input
							type={showPassword ? 'text' : 'password'}
							name='confirmPassword'
							id='confirmPassword'
							placeholder='Confirm password'
							className={`px-2 py-2 rounded-lg w-full ${
								isValidConfirmPassword
									? 'border-2 border-green-400'
									: 'border-2 border-red-400'
							}`}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>

					<button
						className='bg-amber-500 text-white rounded-full py-1'
						disabled={
							!firstName ||
							!lastName ||
							!isValidEmail ||
							!isValidPassword ||
							!isValidConfirmPassword
								? true
								: false
						}
						type='submit'
					>
						Create account
					</button>

					<div className='text-white bg-darkgray rounded-lg p-2'>
						<span>Password must contain:</span>
						<ul className='text-xs list-disc pl-5'>
							<li>At least one uppercase letter (A-Z)</li>
							<li>At least one numerical digit (0-9)</li>
							<li>Minimum length of 8 characters</li>
						</ul>
					</div>
				</Form>

				<div className='flex flex-col items-center gap-2'>
					<span className=''>Already have and account?</span>
					<Link
						to='/profile'
						className='border-2 border-amber-500 text-white rounded-full py-1 w-[233px] text-center'
					>
						Sign In
					</Link>
				</div>
			</section>
		</>
	);
}
