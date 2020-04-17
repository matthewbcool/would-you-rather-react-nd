import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';
import { currentUserObject } from '../login/loginSlice';
import { userObjects } from './leaderSlice';
import { useSelector } from 'react-redux';
import './leaderboard.css';
const LeaderBoard = () => {
	let users = useSelector(userObjects);

	let leaderBoardItems = [];

	let getScore = (userObj) => {
		let answers = userObj.answers.length;
		let questions = userObj.questionCount;
		return answers + questions;
	};

	const rankUsers = (users) => {
		let highest = 0;
		let rankedUserArray = [];
		users.forEach((user) => {
			if (getScore(user) > highest) {
				rankedUserArray.unshift(user);
			} else {
				rankedUserArray.push(user);
			}
		});
		return rankedUserArray;
	};

	let rankedUsers = rankUsers(users);

	rankedUsers.forEach((user) => {
		leaderBoardItems.push(
			<LeaderBoardItem
				key={user.user}
				userName={user.user}
				profile={user.profile}
				numQuestions={user.questionCount}
				numAnswers={user.answers.length}
			/>
		);
	});

	return (
		<div className="leaderboard-wrapper">
			<h1>LeaderBoard</h1>
			{leaderBoardItems}
		</div>
	);
};

export default LeaderBoard;
