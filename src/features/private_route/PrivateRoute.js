import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = () => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
