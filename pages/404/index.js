import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 4000);
	}, []);

	return (
		<div className='not-found'>
			<h1>Page Not found</h1>
			<p>
				Redirecting to <Link href='/'>Home Page</Link>
			</p>
		</div>
	);
};

export default NotFound;
