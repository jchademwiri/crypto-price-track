import Link from 'next/link';
import Image from 'next/image';
import styles from './Coins.module.scss';
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';

const Coins = ({
	position,
	name,
	price,
	symbol,
	marketcap,
	volume,
	coinIimage,
	priceChange,
	id,
}) => {
	const myLoader = ({ src }) => {
		return `${coinIimage}`;
	};

	return (
		<Link href='/[id]' as={`/${id}`}>
			<a>
				<div className={styles.coin_container}>
					<div className={styles.coin_row}>
						<div className={styles.coin}>
							<h1 className={styles.coin_position}> {position} </h1>
							<Image
								loader={myLoader}
								src={`${coinIimage}`}
								height={50}
								width={50}
								alt={id}
								className={styles.coin__img}
							/>
							<h1 className={styles.coin_h1}>{name}</h1>
							<h4 className={styles.coin_symbol}>{symbol}</h4>
						</div>
						<div className={styles.coin_data}>
							<p className={styles.coin_price}>$ {price.toLocaleString()} </p>
							{priceChange < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown /> {priceChange.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp /> {priceChange.toFixed(2)} %
								</p>
							)}
							<p className={styles.coin_volume}>$ {volume.toLocaleString()}</p>

							<p className={styles.coin_marketcap}>
								M Cap: $ {marketcap.toLocaleString()}
							</p>
						</div>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Coins;
