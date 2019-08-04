import React from 'react';
import { ChevronLeft } from 'react-feather';
import AirportDetailsList from './AirportDetailsList';
import AirportDetailsIndicator from './AirportDetailsIndicators';
import AirportLocation from './AirportLocation';

const AirportDetails = ({ airport, onBackClick, googleApi }) => {
	const {
		airportName,
		airportCode,
		city,
		region,
		country,
		onlineIndicator,
		domesticAirport,
		eticketableAirport,
		internationalAirport,
		regionalAirport
	} = airport;

	return (
		<div>
			<div className="row">
				<div className="col-12 py-4 h5 pointer" onClick={onBackClick}>
					<ChevronLeft /> Back
				</div>
				<h3 className="col-12">
					{airportName} <span className="text-muted">({airportCode})</span>
				</h3>
			</div>

			<div className="row">
				<div className="col-sm-12 col-md-3 col-l-4 mb-2">
					<AirportDetailsList list={region} />
				</div>
				<div className="col-sm-12 col-md-3 col-l-4 mb-2">
					<AirportDetailsList list={country} />
				</div>
				<div className="col-sm-12 col-md-3 col-l-4 mb-2">
					<AirportDetailsList list={city} />
				</div>
			</div>

			<div className="row mt-2">
				<div className="d-md-flex d-sm-block col">
					<AirportDetailsIndicator title="onlineIndicator" value={onlineIndicator} />
					<AirportDetailsIndicator title="domesticAirport" value={domesticAirport} />
					<AirportDetailsIndicator title="eticketableAirport" value={eticketableAirport} />
					<AirportDetailsIndicator title="internationalAirport" value={internationalAirport} />
					<AirportDetailsIndicator title="regionalAirport" value={regionalAirport} />
				</div>
			</div>

			<div className="row">
				<div className="col">
					<AirportLocation googleApi={googleApi} selectedAirport={airport}/>
				</div>
			</div>
		</div>
	);
};

export default AirportDetails;
