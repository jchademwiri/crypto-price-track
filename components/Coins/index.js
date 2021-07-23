import styles from './Coins.module.scss';

const Coins = ({
	position,
	name,
	price,
	symbol,
	marketcap,
	volume,
	image,
	priceChange,
	id,
}) => {
	return (
		<>
			<div className={styles.coin_container}>
				<div className={styles.coin_row}>
					<div className={styles.coin}>
						{/* <h1 className={styles.coin_h1}> {position} </h1> */}
						<img
							src={image}
							height='100'
							width='100'
							alt={id}
							className={styles.coin_img}
						/>
						<h1 className={styles.coin_h1}>{name}</h1>
						<h4 className={styles.coin_symbol}>{symbol}</h4>
					</div>
					<div className={styles.coin_data}>
						<p className={styles.coin_price}>$ {price.toLocaleString()}</p>
						<p className={styles.coin_volume}>$ {volume.toLocaleString()}</p>

						{priceChange < 0 ? (
							<p className={`${styles.coin_percent},${styles.red}`}>
								{priceChange.toFixed(2)} %
							</p>
						) : (
							<p className={`${styles.coin_percent},${styles.green}`}>
								{priceChange.toFixed(2)} %
							</p>
						)}

						<p className={styles.coin_marketcap}>
							$ {marketcap.toLocaleString()}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Coins;
