import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { currentPollAnswer } from '../home/homeSlice';
import { currentUserObject } from '../login/loginSlice';
import { useSelector } from 'react-redux';
import { userObjects } from '../leaderboard/leaderSlice';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let history = useHistory();
	let currentPoll = useSelector(currentPollAnswer);
	let globalUserObjects = useSelector(userObjects);
	let userObj = useSelector(currentUserObject);

	//redirect to login if nobody is logged in
	if (userObj.profile === '') {
		history.push('/');
	}
	const getPercentage = (numVotes) => {
		let numUsers = globalUserObjects.length;
		return Math.floor((numVotes / numUsers) * 100);
	};

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
				<img className="profile-pic" src={currentPoll.profile} alt="user profile" />
			</div>
			<h2>Would you rather...</h2>
			<form name="question">
				<div className="input-item-poll">
					<div>
						{checkAnswerOne}
						<label htmlFor="">{currentPoll.choiceOne}</label>
					</div>
					<span className="vote-txt">
						Total Votes: {currentPoll.choiceOneVotes.length}
						<span className="percentage-txt">
							{`${getPercentage(currentPoll.choiceOneVotes.length)} %`}
						</span>
					</span>
				</div>
				<div className="input-item-poll">
					<div>
						{checkAnswerTwo}
						<label htmlFor="">{currentPoll.choiceTwo}</label>
					</div>
					<span className="vote-txt">
						Total Votes: {currentPoll.choiceTwoVotes.length}
						<span className="percentage-txt">{`${getPercentage(
							currentPoll.choiceTwoVotes.length
						)} %`}</span>
					</span>
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
