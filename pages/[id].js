import moment from 'moment';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Coin.module.scss';

import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';

const Coin = ({ coin }) => {
	let pageTitle = `${coin.name} Price Details `;
	const todayDate = new Date();
	const myLoader = ({ src }) => {
		return `${coin.image.small}`;
	};

	return (
		<>
			<Head>
				<title> {pageTitle} </title>
			</Head>
			<div className={styles.coin_page}>
				<div className={styles.grid_container_one}>
					<div className={styles.coin_price_details}>
						<h5>Rank : # {coin.market_cap_rank} </h5>
						<div className={styles.coin}>
							<Image
								loader={myLoader}
								src={`${coin.image.small}`}
								alt={coin.name}
								width={40}
								height={40}
								className={(styles.coin_image, styles.coin__item)}
							/>
							<h1 className={(styles.coin_name, styles.coin__item)}>
								{coin.name}
							</h1>
							<p className={(styles.coin_ticker, styles.coin__item)}>
								({coin.symbol})
							</p>
						</div>

						{/* ========================= end of coin  */}
						<div className={styles.coin_price}>
							<p className={styles.coin_current}>
								$ {coin.market_data.current_price.usd}{' '}
								<small className={styles.coin_price__age}>
									{coin.market_data.price_change_percentage_24h < 0 ? (
										<span className={(styles.coin_percent, styles.red)}>
											<MdTrendingDown /> (
											{coin.market_data.price_change_percentage_24h.toFixed(2)}{' '}
											%)
										</span>
									) : (
										<span className={(styles.coin_percent, styles.green)}>
											<MdTrendingUp color='#13c783' />{' '}
											{coin.market_data.price_change_percentage_24h.toFixed(2)}{' '}
											%
										</span>
									)}
								</small>
							</p>
						</div>
					</div>
					{/* ============= End of column one  */}
					<div className={styles.year_growth}>
						{/* 1 Year change  */}
						<h2>1 Year </h2>
						{coin.market_data.price_change_percentage_1y < 0 ? (
							<p className={(styles.coin_percent, styles.red)}>
								<MdTrendingDown />{' '}
								{coin.market_data.price_change_percentage_1y.toFixed(2)} %
							</p>
						) : (
							<p className={(styles.coin_percent, styles.green)}>
								<MdTrendingUp />{' '}
								{coin.market_data.price_change_percentage_1y.toFixed(2)} %
							</p>
						)}
					</div>
				</div>

				{/* ======= end of grid container one  */}
				<div className={styles.grid_container_two}>
					<div className={styles.coin_price_details}>
						<div className={styles.supply__item}>
							{/* 24 h change  */}
							<p>24 hrs change </p>
							{coin.market_data.price_change_percentage_24h < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown />{' '}
									{coin.market_data.price_change_percentage_24h.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp />{' '}
									{coin.market_data.price_change_percentage_24h.toFixed(2)} %
								</p>
							)}{' '}
						</div>
						{/* 7 days change  */}
						<div className={styles.supply__item}>
							<p>7 days change </p>
							{coin.market_data.price_change_percentage_7d < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown />{' '}
									{coin.market_data.price_change_percentage_7d.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp />{' '}
									{coin.market_data.price_change_percentage_7d.toFixed(2)} %
								</p>
							)}
						</div>

						{/* 14 days change  */}
						<div className={styles.supply__item}>
							<p>14 days change </p>
							{coin.market_data.price_change_percentage_14d < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown />{' '}
									{coin.market_data.price_change_percentage_14d.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp />{' '}
									{coin.market_data.price_change_percentage_14d.toFixed(2)} %
								</p>
							)}
						</div>
						{/* 30 days change  */}
						<div className={styles.supply__item}>
							<p>30 days change </p>
							{coin.market_data.price_change_percentage_30d < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown />{' '}
									{coin.market_data.price_change_percentage_30d.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp />{' '}
									{coin.market_data.price_change_percentage_30d.toFixed(2)} %
								</p>
							)}
						</div>
						{/* 60 days change  */}
						<div className={styles.supply__item}>
							<p>60 days change </p>
							{coin.market_data.price_change_percentage_60d < 0 ? (
								<p className={(styles.coin_percent, styles.red)}>
									<MdTrendingDown />{' '}
									{coin.market_data.price_change_percentage_60d.toFixed(2)} %
								</p>
							) : (
								<p className={(styles.coin_percent, styles.green)}>
									<MdTrendingUp />{' '}
									{coin.market_data.price_change_percentage_60d.toFixed(2)} %
								</p>
							)}
						</div>
					</div>

					<div className={styles.coin_supply_details}>
						<div className={styles.supply__item}>
							{/* market cap  */}
							<p>Market Cap:</p>
							<p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p>
						</div>
						<div className={styles.supply__item}>
							{/* Curculating Supply  */}
							<p>Circulating Supply:</p>
							<p>
								{coin.symbol}{' '}
								{coin.market_data.circulating_supply.toLocaleString()}
							</p>
						</div>
						<div className={styles.supply__item}>
							{/* Total Supply  */}
							<p>Total Supply: </p>
							<p>
								{/* {coin.market_data.total_supply.toLocaleString()}{' '} */}
								{coin.market_data.total_supply == null ? (
									<span className={styles.coin_percent}>Not Provided</span>
								) : (
									<span className={styles.coin_percent}>
										{coin.symbol}{' '}
										{coin.market_data.total_supply.toLocaleString()}
									</span>
								)}
							</p>
						</div>

						<div className={styles.supply__item}>
							{/* Date updated  */}
							<p>Last Updated:</p>
							<p>
								{' '}
								{
									(coin.market_data.last_updated = moment(
										todayDate,
										'DD-MM-YYY'
									).format('DD-MMMM-YYYY'))
								}
							</p>
						</div>
						<div className={styles.supply__item}>
							<p>Official Website: </p>

							<a
								href={coin.links.homepage}
								target='_blank'
								rel='noopener noreferrer'>
								{coin.links.homepage}
							</a>
						</div>
					</div>
					{/* ============== End of supply details  */}
				</div>
			</div>
		</>
	);
};

export default Coin;

export async function getServerSideProps(context) {
	const { id } = context.query;

	const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

	const data = await res.json();

	return {
		props: {
			coin: data
		}
	};
}
