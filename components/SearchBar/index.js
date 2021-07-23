import styles from './Search.module.scss';

const SearchBar = ({ ...rest }) => {
	return (
		<>
			<div className={styles.coin_search}>
				<input
					type='text'
					className={styles.coin_input}
					{...rest}
					placeholder='Search for coins'
				/>
			</div>
		</>
	);
};

export default SearchBar;
