import Link from 'next/link';
const NotFound = () => {
	return (
		<>
			<div className='not-found'>
				<h1>Page Not found</h1>
				<p>
					Go <Link href='/'>Home</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
