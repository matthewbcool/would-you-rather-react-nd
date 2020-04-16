import React from 'react';

const LeaderBoardItem = (props) => {
	return (
		<div className="leaderboard-item-wrapper">
			<img alt="user profile" src={props.profile} className="profile-image"></img>
			<h3>{props.userName}</h3>
			<h3>{`Questions Asked: ${props.numQuestions}`}</h3>
			<h3>{`Answers: ${props.numAnswers}`}</h3>
		</div>
	);
};

export default LeaderBoardItem;
