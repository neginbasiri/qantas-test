import React, { useState, useEffect, useRef, Fragment } from 'react';
import GoogleMapsApiLoader from 'google-maps-api-loader';
import AirportListItem from './AirportListItem';
import AirportDetails from './AirportDetails';
import { Google_API_Key } from '../common/keys';

const AirportList = ({ airports }) => {
	const googleApi = useRef(null);
	const [view, setView] = useState('list');
	const [selectedAirport, setSelectedAirport] = useState(null);

	useEffect(() => {
		const getGoogleApi = async () => {
			googleApi.current = await GoogleMapsApiLoader({ apiKey: `${Google_API_Key}`, libraries: ['places', 'geometry'] });
		};

		getGoogleApi();
	}, []);

	const onAirportSelect = airport => {
		setSelectedAirport(airport);
		setView('details');
	};

	return (
		<div>
			{view === 'list' && (
				<Fragment>
				<div className="row">
					<h3 className="col-12 my-2">Airports</h3>

						</div>
					{airports.map((airport, index) => (
						<AirportListItem key={index} airport={airport} onAirportSelect={onAirportSelect} />
					))}
			</Fragment>
			)}
			{view === 'details' && (
				<AirportDetails airport={selectedAirport} onBackClick={() => setView('list')} googleApi={googleApi}/>
			)}
		</div>
	);
};

export default AirportList;
