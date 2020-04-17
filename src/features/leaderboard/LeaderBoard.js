import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';
import { currentUserObject } from '../login/loginSlice';
import { userObjects } from './leaderSlice';
import { useSelector } from 'react-redux';
import './leaderboard.css';
const LeaderBoard = () => {
	let users = useSelector(userObjects);

	let leaderBoardItems = [];

	users.forEach((user) => {
		leaderBoardItems.push(
			<LeaderBoardItem
				userName={user.user}
				profile={user.profile}
				numQuestions={user.questionCount}
				numAnswers={user.answers.length}
			/>
		);
	});

	const userObj = useSelector(currentUserObject);
	return (
		<div className="leaderboard-wrapper">
			<h1>LeaderBoard</h1>
			{leaderBoardItems}
		</div>
	);
};

export default LeaderBoard;
