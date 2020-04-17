import React, { useState } from 'react';
import { currentUserObject, addToQuestionCount } from '../login/loginSlice';
import { currentUnAnswered, addQuestionToUnAnswered } from '../home/homeSlice';
import { updateLeaderBoard, userObjects } from '../leaderboard/leaderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreateQestion = () => {
	let history = useHistory();
	const dispatch = useDispatch();
	const currentUser = useSelector(currentUserObject);
	let globalUserObjects = useSelector(userObjects);
	let unAnswered = useSelector(currentUnAnswered);
	const [choiceOne, setChoiceOne] = useState('');
	const [choiceTwo, setChoiceTwo] = useState('');
	const submitNewQuestion = (e) => {
		e.preventDefault();
		dispatch(addToQuestionCount());
		let question = {
			id: currentUser.user,
			profile: currentUser.profile,
			timeCreated: Date.now(),
			choiceOne: choiceOne,
			choiceTwo: choiceTwo,
			choiceOneVotes: [],
			choiceTwoVotes: [],
		};
		let addQuestion = [...unAnswered, question];
		dispatch(addQuestionToUnAnswered(addQuestion));
		dispatch(updateLeaderBoard(globalUserObjects, currentUser));
		history.push('/');
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
