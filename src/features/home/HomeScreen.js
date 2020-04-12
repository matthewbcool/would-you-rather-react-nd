import React, { useState, Fragment } from 'react';
import UnAnswered from '../home/UnAnswered';
import { currentUnAnswered } from './homeSlice';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
	const [showAnswered, setShowAnswered] = useState(false);
	const toggleAnswered = () => {
		setShowAnswered(!showAnswered);
	};
	const unAnsweredQuestions = useSelector(currentUnAnswered);
	const unAnswered = unAnsweredQuestions.map((question) => {
		console.log(question);
		return (
			<UnAnswered
				key={question.timeCreated}
				choiceOne={question.choiceOne}
				choiceTwo={question.choiceTwo}
				profile={question.profile}
				userName={question.id}
				questionObject={question}
			/>
		);
	});

	console.log(unAnswered);

	return (
		<div>
			<h1>HOME</h1>
			<ul>
				{showAnswered ? (
					<li>
						<button onClick={toggleAnswered} className="question-choice">
							UnAnswered Questions
						</button>
					</li>
				) : (
					<li>
						<button onClick={toggleAnswered} className="question-choice">
							Answered Questions
						</button>
					</li>
				)}
			</ul>
			{showAnswered ? <Fragment></Fragment> : <Fragment>{unAnswered}</Fragment>}
		</div>
	);
};

export default HomeScreen;
