import React from 'react';
import LeaderBoardItem from './LeaderBoardItem';
import './leaderboard.css';
const LeaderBoard = () => {
	return (
		<div className="leaderboard-wrapper">
			<h1>LeaderBoard</h1>
			<LeaderBoardItem userName="test" />
		</div>
	);
};

export default LeaderBoard;
