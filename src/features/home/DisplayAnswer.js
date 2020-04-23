import React, { Fragment, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { currentPollAnswer } from '../home/homeSlice';
import { currentUser, currentUserObject, isLoggedIn, answers } from '../login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userObjects } from '../leaderboard/leaderSlice';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let dispatch = useDispatch();
	let history = useHistory();
	let answered = useSelector(answers);
	let currentPoll = useSelector(currentPollAnswer);
	let globalUserObjects = useSelector(userObjects);
	let user = useSelector(currentUser);
	let userObj = useSelector(currentUserObject);

	//redirect to login if nobody is logged in
	if (userObj.profile === '') {
		history.push('/');
	}
	console.log(globalUserObjects);

	const checkForAnswerMatch = (choice) => {
		if (choice.toLowerCase().split(' ').join('') === id) {
			return true;
		}
		return false;
	};
	console.log(userObj);

	const checkAnswerOne = checkForAnswerMatch(currentPoll.choiceOne) ? (
		<input type="radio" id={currentPoll.choiceOne} name="question" value={currentPoll.choiceOne} defaultChecked />
	) : (
		<input type="radio" id={currentPoll.choiceOne} name="question" value={currentPoll.choiceOne} disabled />
	);
	const checkAnswerTwo = checkForAnswerMatch(currentPoll.choiceTwo) ? (
		<input type="radio" id={currentPoll.choiceTwo} name="question" value={currentPoll.choiceTwo} defaultChecked />
	) : (
		<input type="radio" id={currentPoll.choiceTwo} name="question" value={currentPoll.choiceTwo} disabled />
	);
	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`${currentPoll.id} asks:`}</h3>
				<img className="profile-pic" src={currentPoll.profile} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question">
				<div className="input-item-poll">
					<div>
						{checkAnswerOne}
						<label htmlFor="">{currentPoll.choiceOne}</label>
					</div>
					<span className="vote-txt">Total Votes: {currentPoll.choiceOneVotes.length}</span>
				</div>
				<div className="input-item-poll">
					<div>
						{checkAnswerTwo}
						<label htmlFor="">{currentPoll.choiceTwo}</label>
					</div>
					<span className="vote-txt">Total Votes: {currentPoll.choiceTwoVotes.length}</span>
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
