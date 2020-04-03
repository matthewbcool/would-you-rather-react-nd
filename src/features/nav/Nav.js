import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
const Nav = () => {
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
			</ul>
			<div className="login-wrapper">
				<Link to="/login">Login</Link>
				<img src="/images/user-ninja-solid.svg" />
			</div>
			<hr />
		</div>
	);
};

export default Nav;
