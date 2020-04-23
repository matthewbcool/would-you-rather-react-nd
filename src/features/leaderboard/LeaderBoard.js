import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';
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

	const scoreUsers = (users) => {
		let scoredUserArray = [];
		users.forEach((user) => {
			let userWithScore = { ...user };
			userWithScore.score = getScore(user);
			scoredUserArray.push(userWithScore);
		});
		console.log(scoredUserArray);
		return scoredUserArray;
	};
	let scoredUsers = scoreUsers(users);

	let rankedUsers = scoredUsers.sort((a, b) => {
		let comparison = 0;
		if (a.score < b.score) {
			comparison = 1;
		} else if (a.score > b.score) {
			comparison = -1;
		}
		return comparison;
	});

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
