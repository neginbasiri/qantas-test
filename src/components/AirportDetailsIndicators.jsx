import React from 'react';
import startCase from 'lodash/startCase';
import { X, Check } from 'react-feather';

const AirportDetailsIndicator = ({ title, value }) => {
	return (
		<div className="mr-4">
			<span className="h6 pr-2">{startCase(`${title}`)}:</span>
			<span className="text-secondary">
				{value ? <Check color={'#28a745'}/> : <X color={'#dc3545'}/>}
			</span>
		</div>
	);
};

export default AirportDetailsIndicator;
