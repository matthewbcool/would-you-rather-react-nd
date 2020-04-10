import React, { useState } from 'react';
import DisplayAnswer from '../home/DisplayAnswer';
import UnAnswered from '../home/UnAnswered';

const HomeScreen = () => {
	const [showAnswered, setShowAnswered] = useState(false);
	const toggleAnswered = () => {
		setShowAnswered(!showAnswered);
	};
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
			{showAnswered ? (
				<UnAnswered
					choiceOne="answered"
					choiceTwo="marry Peter Parker VOTED"
					profile={'../images/gwen-stacy.jpg'}
					userName={'Gwen Stacy'}
				/>
			) : (
				<UnAnswered
					choiceOne="marry Spiderman"
					choiceTwo="marry Peter Parker"
					profile={'../images/gwen-stacy.jpg'}
					userName={'Gwen Stacy'}
				/>
			)}
		</div>
	);
};

export default HomeScreen;
