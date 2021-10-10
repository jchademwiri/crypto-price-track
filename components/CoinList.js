import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import Coins from './Coins';
export default function CoinList({ filteredCoins }) {
	const [pageNumber, setPageNumber] = useState(0);

	const coinsPerPage = 50;
	const pagesVisited = pageNumber * coinsPerPage;

	const displayCoins = filteredCoins
		.slice(pagesVisited, pagesVisited + coinsPerPage)
		.map((coin) => {
			return (
				<Coins
					key={coin.id}
					position={coin.market_cap_rank}
					name={coin.name}
					id={coin.id}
					price={coin.current_price}
					symbol={coin.symbol}
					marketcap={coin.market_cap}
					volume={coin.total_volume}
					coinIimage={coin.image}
					priceChange={coin.price_change_percentage_24h}
				/>
			);
		});

	const pageCount = Math.ceil(filteredCoins.length / coinsPerPage);
	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<>
			{/* {filteredCoins.map((coin) => {
				return (
					<Coins
						key={coin.id}
						position={coin.market_cap_rank}
						name={coin.name}
						id={coin.id}
						price={coin.current_price}
						symbol={coin.symbol}
						marketcap={coin.market_cap}
						volume={coin.total_volume}
						coinIimage={coin.image}
						priceChange={coin.price_change_percentage_24h}
					/>
				);
			})} */}
			{displayCoins}
			<div className='paginate'>
				<ReactPaginate
					previousLabel={'Previous'}
					nextLabel={'Next'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'paginationBttns'}
					previousLinkClassName={'previousBttn'}
					nextLinkClassName={'nextBttn'}
					disabledClassName={'pagenationDisabled'}
					activeClassName={'paginationActive'}
				/>
			</div>
		</>
	);
}
