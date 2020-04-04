import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUser, isLoggedIn } from '../login/loginSlice';
import { useDispatch } from 'react-redux';
import { setUser, toggleLogIn } from '../login/loginSlice';
import './nav.css';
const Nav = () => {
	const dispatch = useDispatch();
	const userName = useSelector(currentUser);
	const Logged = useSelector(isLoggedIn);
	const logout = () => {
		dispatch(setUser(''));
		dispatch(toggleLogIn());
	};
	return (
		<div className="nav-wrapper">
			<ul className="nav-ul">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/new-question">New Question</Link>
				</li>
				<li>
					<Link to="/leaderboards">Leaderboards</Link>
				</li>
				<li>{Logged ? 'True' : 'False'}</li>
			</ul>

			<div className="login-wrapper">
				{!Logged ? (
					<Link to="/login">Login</Link>
				) : (
					<div className="login-wrapper">
						<button className="logout-menu-item" onClick={logout}>
							Signout
						</button>
						<p className="logout-menu-item">{userName}</p>
						<img className="logout-menu-item" alt="user ninja profile" src="/images/user-ninja-solid.svg" />
					</div>
				)}
			</div>
			<hr />
		</div>
	);
};

export default Nav;
