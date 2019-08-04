import React, { useEffect, useRef } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';

const AirportLocation = ({ selectedAirport, googleApi }) => {
  const {location} = selectedAirport;
	const mapRef = useRef(null);
console.log(selectedAirport);
	useEffect(() => {
		initMap();
	});

	const initMap = () => {

		const mapLocation = {lat: location.latitude, lng: location.longitude};
		const map = new googleApi.current.maps.Map(mapRef.current, {
			zoom: 8,
			center: mapLocation
		});

		const marker = new googleApi.current.maps.Marker({
          position: mapLocation,
          map: map,
          title: 'Hello World!'
        });

	};


	return (
		<ErrorBoundary>
			<div id="map" className="airport-location mt-4" ref={mapRef}/>
		</ErrorBoundary>
	);
};

export default AirportLocation;
