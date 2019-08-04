import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './main.scss';
import logo from './qantas-vector-logo.svg';
import AirportList from './components/AirportList';
import { Airport_URL } from './common/keys';

function App() {
	const [loading, setLoading] = useState(false);
	const [airports, setAirports] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		getAirportData();
	}, []);

	const getAirportData = async() => {
		setLoading(true);
	
		Axios.get(Airport_URL)
			.then(({ data }) => {
				setAirports(data);
			})
			.catch(err => setError('An error occurred during fetching airports data.'))
			.finally(() => setLoading(false));
	}

	return (
		<div className="app">
			<header className="header">
				<div className="text-center">
					<img src={logo} alt="Logo" className="logo my-2" />
				</div>
			</header>
			{loading && (
				<div className="d-flex justify-content-center mt-5">
					<h2 className="pr-2">Loading</h2>
					<div className="spinner-border mt-2" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			)}
			{!loading && (
				<div className="container">
					<AirportList airports={airports} />
					{error && (
						<div className="row">
							<div className="col error">{error}</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default App;
