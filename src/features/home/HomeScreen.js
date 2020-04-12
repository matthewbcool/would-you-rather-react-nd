import React, { useState, Fragment } from 'react';
import UnAnswered from '../home/UnAnswered';
import { currentUnAnswered, currentAnswered } from './homeSlice';
import { useSelector } from 'react-redux';
import DisplayAnswer from '../home/DisplayAnswer';

const HomeScreen = () => {
	const [showAnswered, setShowAnswered] = useState(false);
	const toggleAnswered = () => {
		setShowAnswered(!showAnswered);
	};
	const unAnsweredQuestions = useSelector(currentUnAnswered);
	const AnsweredQuestions = useSelector(currentAnswered);

	const Answered = AnsweredQuestions.map((question) => {
		return (
			<DisplayAnswer
				key={question.timeCreated}
				choiceOne={question.choiceOne}
				choiceTwo={question.choiceTwo}
				profile={question.profile}
				userName={question.id}
				questionObject={question}
			/>
		);
	});

	const unAnswered = unAnsweredQuestions.map((question) => {
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
			{showAnswered ? <Fragment>{Answered}</Fragment> : <Fragment>{unAnswered}</Fragment>}
		</div>
	);
};

export default HomeScreen;
