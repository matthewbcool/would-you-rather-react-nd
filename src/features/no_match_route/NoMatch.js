import React from 'react';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
	let location = useLocation();

	return (
		<div>
			<h3>Please login or double check the url for errors.</h3>
			<h3>No route at {location.pathname}</h3>
		</div>
	);
};

export default NoMatch;
