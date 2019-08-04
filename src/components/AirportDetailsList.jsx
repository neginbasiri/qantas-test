import React from 'react';
import startCase from 'lodash/startCase';

const AirportDetailsList = ({ list }) => {
	return (
		<div className="mr-2">
				{Object.keys(list).map((key, index) => (
					<div key={index}>
						<span className="pr-2 h6">{startCase(key)}:</span>
						<span className="text-secondary">{list[key]}</span>
					</div>
				))}
		</div>
	);
};

export default AirportDetailsList;
