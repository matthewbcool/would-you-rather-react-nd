import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser, toggleLogIn } from '../login/loginSlice';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css';
const Login = () => {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: '/' } };
	const dispatch = useDispatch();
	const chooseUser = e => {
		dispatch(setUser(e.target.innerHTML));
		dispatch(toggleLogIn());
		history.replace(from);
	};
	const users = ['Megaman', 'Naruto', 'Gwen Stacy'];

	return (
		<div>
			<h1>Choose your profile</h1>
			{users.map(user => {
				return (
					<div key={`${user}-id`} className="select-profile-wrapper" value={user} onClick={chooseUser}>
						{user}
					</div>
				);
			})}
		</div>
	);
};

export default Login;
