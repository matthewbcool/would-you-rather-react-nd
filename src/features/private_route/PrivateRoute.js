import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../login/loginSlice';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
	const loggedIn = useSelector(isLoggedIn);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn ? (
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
