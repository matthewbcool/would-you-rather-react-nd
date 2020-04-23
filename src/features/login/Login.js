import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, toggleLogIn, setUserObject } from '../login/loginSlice';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css';
import { userObjects } from '../leaderboard/leaderSlice';

const Login = () => {
	let history = useHistory();
	let location = useLocation();
	const globalUserObjects = useSelector(userObjects);
	const getUserObjectFromData = (userName) => {
		let userObject = {};
		globalUserObjects.forEach((item) => {
			if (item.user === userName) {
				userObject = item;
			}
		});
		return userObject;
	};
	let { from } = location.state || { from: { pathname: '/' } };
	const dispatch = useDispatch();
	const chooseUser = (e) => {
		dispatch(setUser(e.target.innerHTML));
		dispatch(setUserObject(getUserObjectFromData(e.target.innerHTML)));
		dispatch(toggleLogIn());
		history.replace(from);
	};

	return (
		<div>
			<h1>Please login...</h1>
			<h1>Choose your profile</h1>
			{globalUserObjects.map((userObj) => {
				return (
					<div
						key={`${userObj.user}-id`}
						className="select-profile-wrapper"
						value={userObj.user}
						onClick={chooseUser}>
						{userObj.user}
					</div>
				);
			})}
		</div>
	);
};

export default Login;
