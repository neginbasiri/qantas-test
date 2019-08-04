import React from 'react';
import { ChevronRight } from 'react-feather';

const airportListItem = ({ airport, onAirportSelect }) => {
	const { airportName, country } = airport;
	const { countryName } = country;
	return (
		<div className="row py-2 border-top airport-list-item" onClick={() => onAirportSelect(airport)}>
			<div className="col-10">
				<div className="h6">{airportName}</div>
				<div className="text-muted">{countryName}</div>
			</div>
			<div className="col-2 text-right mt-2">
				<ChevronRight color={'#6c757d'}/>
			</div>
		</div>




	);
};

export default airportListItem;
