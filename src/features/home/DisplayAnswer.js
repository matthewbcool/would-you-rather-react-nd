import React, { Fragment, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered } from '../home/homeSlice';
import { currentUser, currentUserObject, isLoggedIn, answers } from '../login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let dispatch = useDispatch();
	let history = useHistory();
	let answered = useSelector(answers);
	let user = useSelector(currentUser);
	let userObj = useSelector(currentUserObject);
	//redirect to login if nobody is logged in
	if (userObj.profile === '') {
		history.push('/');
	}
	console.log(userObj);
	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`asks:`}</h3>
				<img className="profile-pic" src={''} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question">
				<div className="input-item">
					<Fragment>
						<input type="radio" id="input-one" name="question" value="" />
						<label htmlFor="">''</label>
					</Fragment>
					)}
				</div>
				<div className="input-item">
					<Fragment>
						<input type="radio" id="input-two" name="question" value="" />
						<label htmlFor=""></label>
					</Fragment>
					)}
				</div>
				<Link to={`/`}>
					<button type="submit" className="submit-btn">
						Back
					</button>
				</Link>
			</form>
		</div>
	);
};

export default DisplayAnswer;
