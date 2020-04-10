import React, { useState } from 'react';
import { currentUserObject } from '../login/loginSlice';
import { useSelector } from 'react-redux';

const CreateQestion = () => {
	const currentUser = useSelector(currentUserObject);
	const [choiceOne, setChoiceOne] = useState('');
	const [choiceTwo, setChoiceTwo] = useState('');
	const submitNewQuestion = (e) => {
		e.preventDefault();
		let question = {
			id: currentUser.user,
			profile: currentUser.profile,
			timeCreated: Date.now(),
			choiceOne: choiceOne,
			choiceTwo: choiceTwo,
			choiceOneVotes: [],
			choiceTwoVotes: [],
		};

		console.log(question);
	};

	const updateChoice = (e) => {
		let inputId = e.target.getAttribute('id');
		if (inputId === 'choice-one-input') {
			setChoiceOne(e.target.value);
		} else {
			setChoiceTwo(e.target.value);
		}
	};

	return (
		<div className="new-question-wrapper">
			<form onSubmit={submitNewQuestion}>
				<h3>Create a would you rather question.</h3>
				<h3>Would you rather...</h3>
				<label>Choice One:</label>
				<input id="choice-one-input" onChange={updateChoice} />
				<label>Choice Two:</label>
				<input id="choice-two-input" onChange={updateChoice} />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default CreateQestion;
