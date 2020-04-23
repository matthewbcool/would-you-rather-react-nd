import React, { useState, Fragment } from 'react';
import UnAnswered from '../home/UnAnswered';
import Answered from '../home/Answered';
import { currentUnAnswered } from './homeSlice';
import { answers } from '../login/loginSlice';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
	const [showAnswered, setShowAnswered] = useState(false);
	const toggleAnswered = () => {
		setShowAnswered(!showAnswered);
	};

	//TODO: refactor for less code duplication
	const unAnsweredQuestions = useSelector(currentUnAnswered);
	const AnsweredQuestions = useSelector(answers);

	let sortedAnswered = [...AnsweredQuestions];
	if (AnsweredQuestions.length > 0) {
		sortedAnswered.sort((a, b) => {
			let comparison = 0;
			if (a.timeCreated < b.timeCreated) {
				comparison = 1;
			} else if (a.timeCreated > b.timeCreated) {
				comparison = -1;
			}
			return comparison;
		});
	}

	let sortedUnAnswered = [...unAnsweredQuestions];
	if (unAnsweredQuestions.length > 0) {
		sortedUnAnswered.sort((a, b) => {
			let comparison = 0;
			if (a.timeCreated < b.timeCreated) {
				comparison = 1;
			} else if (a.timeCreated > b.timeCreated) {
				comparison = -1;
			}
			return comparison;
		});
	}

	const AnsweredList = sortedAnswered.map((question) => {
		return (
			<Answered
				key={question.timeCreated}
				choiceOne={question.choiceOne}
				choiceTwo={question.choiceTwo}
				profile={question.profile}
				userName={question.id}
				questionObject={question}
			/>
		);
	});

	const unAnswered = sortedUnAnswered.map((question) => {
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

	return (
		<div>
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
							Go to Answered ->
						</button>
					</li>
				)}
			</ul>
			{showAnswered ? <Fragment>{AnsweredList}</Fragment> : <Fragment>{unAnswered}</Fragment>}
		</div>
	);
};

export default HomeScreen;
