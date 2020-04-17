import React, { useState } from 'react';
import '../home/home.css';
import { Link } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered } from '../home/homeSlice';
import {
	setUser,
	currentUser,
	isLoggedIn,
	currentUserObject,
	answers,
	updateAnsweredQuestions,
} from '../login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const UnAnswered = (props) => {
	const [answer, setAnswer] = useState('');
	const [questionId, setQuestionId] = useState('');
	const dispatch = useDispatch();
	const answersArray = useSelector(answers);
	const user = useSelector(currentUser);
	const currentUserObj = useSelector(currentUserObject);
	const currentUnAnsweredArray = useSelector(currentUnAnswered);
	const onFormChange = (e) => {
		setAnswer(e.target.value);
		setQuestionId(e.target.value.toLowerCase().split(' ').join(''));
	};

	const filterOutCurrentQuestion = (question) => {
		return currentUnAnsweredArray.filter((item) => item !== question);
	};

	const submit = (e) => {
		let updatedUnAnswered = filterOutCurrentQuestion(props.questionObject);
		dispatch(setCurrentUnAnswered(updatedUnAnswered));
		//if the answer is equal to choice one push the name of the user to choice one, if not push to choice two
		let updateQuestionObject = { ...props.questionObject };
		if (props.choiceOne === answer) {
			updateQuestionObject.choiceOneVotes = [...updateQuestionObject.choiceOneVotes, user];
		}
		if (props.choiceTwo === answer) {
			updateQuestionObject.choiceTwoVotes = [...updateQuestionObject.choiceTwoVotes, user];
		}
		console.log(updateQuestionObject);
		dispatch(updateAnsweredQuestions([...answersArray, updateQuestionObject]));
		console.log(currentUserObj);
	};

	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`${props.userName} asks:`}</h3>
				<img className="profile-pic" src={props.profile} alt={`${props.userName}-asks`} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question" onSubmit={submit} onChange={onFormChange}>
				<div className="input-item">
					<input type="radio" id={props.choiceOne} name="question" value={props.choiceOne} />
					<label htmlFor={props.choiceOne}>{props.choiceOne}</label>
				</div>
				<div className="input-item">
					<input type="radio" id={props.choiceTwo} name="question" value={props.choiceTwo} />
					<label htmlFor={props.choiceTwo}>{props.choiceTwo}</label>
				</div>
				<Link onClick={submit} to={`/questions/${questionId}`}>
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</Link>
			</form>
		</div>
	);
};

export default UnAnswered;
