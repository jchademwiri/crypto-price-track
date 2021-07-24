import Image from 'next/image';
import styles from './Footer.module.scss';
const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<a
					href='https://playhousemedia.net'
					target='_blank'
					rel='noopener noreferrer'>
					{/* Powered by Playhouse Media */}
					<span className={styles.logo}>
						<img
							src='/logobrand.svg'
							alt='Playhouse Media Logo'
							width={184}
							height={41}
						/>
					</span>
				</a>
			</footer>
		</>
	);
};

export default Footer;
