import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title = 'Crypto Price Tracker' }) => {
	return (
		<div className='layout'>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
