import { useParams, Form, Link } from 'react-router';
import Nav from './Nav';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const TITLE_REGEX = /^.{1,30}$/;
const CONTENT_REGEX = /^[\s\S]{1,200}$/;

export default function WriteReview() {
	const params = useParams();
	const { auth } = useAuth();

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const isTitleValid = TITLE_REGEX.test(title);
	const isContentValid = CONTENT_REGEX.test(content);

	return (
		<>
			<Nav />
			<div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
				<div className='w-60'>
					<Link to={`/restaurant/${params.restaurantId}`}>
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
					action={`/review/${params.restaurantId}`}
					className='flex flex-col gap-3 text-black w-60'
				>
					<input type='hidden' name='token' value={auth?.jwt} />
					<label className='flex flex-col'>
						<span className='text-white text-m'>Add a title</span>
						<span className='text-white text-sm pb-1'>
							(30 Character limit)
						</span>
						<input
							type='text'
							name='title'
							className={`rounded-lg p-1 ${
								isTitleValid
									? 'border-2 border-green-400'
									: 'border-2 border-red-400'
							}`}
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white text-m'>Tell us about your visit</span>
						<span className='text-white text-sm pb-1'>
							(200 Character limit)
						</span>
						<textarea
							name='content'
							rows={6}
							className={`rounded-lg p-1 ${
								isContentValid
									? 'border-2 border-green-400'
									: 'border-2 border-red-400'
							}`}
							value={content}
							onChange={(e) => setContent(e.target.value)}
						></textarea>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium'>Rate your experience</span>
						<select
							name='rating'
							id='rating'
							className='bg-white rounded-lg px-2 py-1 w-15'
						>
							<option value='5'>5</option>
							<option value='4'>4</option>
							<option value='3'>3</option>
							<option value='2'>2</option>
							<option value='1'>1</option>
						</select>
					</label>
					<button className='bg-amber-500 text-white rounded-full w-30 self-center py-1'>
						Submit
					</button>
				</Form>
			</div>
		</>
	);
}
