import React, { useState, useEffect } from 'react';
import '../home/home.css';
import { Link } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered, setCurrentPollAnswer } from '../home/homeSlice';
import { currentUser, answers } from '../login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const Answered = (props) => {
	const [answer, setAnswer] = useState('');
	const [questionId, setQuestionId] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(currentUser);
	const currentUnAnsweredArray = useSelector(currentUnAnswered);
	useEffect(() => {
		getId();
	}, []);
	const getId = () => {
		setQuestionId(props.questionObject.answerId);
	};
	const checkForAnswerMatch = (choice) => {
		if (choice.toLowerCase().split(' ').join('') === questionId) {
			return true;
		}
		return false;
	};

	const checkAnswerOne = checkForAnswerMatch(props.choiceOne) ? (
		<input type="radio" id={props.choiceOne} name="question" value={props.choiceOne} defaultChecked />
	) : (
		<input type="radio" id={props.choiceOne} name="question" value={props.choiceOne} disabled />
	);
	const checkAnswerTwo = checkForAnswerMatch(props.choiceTwo) ? (
		<input type="radio" id={props.choiceTwo} name="question" value={props.choiceTwo} defaultChecked />
	) : (
		<input type="radio" id={props.choiceTwo} name="question" value={props.choiceTwo} disabled />
	);

	const submit = (e) => {
		//if the answer is equal to choice one push the name of the user to choice one, if not push to choice two
		let updateQuestionObject = { ...props.questionObject };
		if (props.choiceOne === answer) {
			updateQuestionObject.answerId = questionId;
			updateQuestionObject.choiceOneVotes = [...updateQuestionObject.choiceOneVotes, user];
		}
		if (props.choiceTwo === answer) {
			updateQuestionObject.answerId = questionId;
			updateQuestionObject.choiceTwoVotes = [...updateQuestionObject.choiceTwoVotes, user];
		}

		dispatch(setCurrentPollAnswer(updateQuestionObject));
	};

	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`${props.userName} asks:`}</h3>
				<img className="profile-pic" src={props.profile} alt={`${props.userName}-asks`} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question" onSubmit={submit} readOnly>
				<div className="input-item">
					{checkAnswerOne}
					<label htmlFor={props.choiceOne}>{props.choiceOne}</label>
				</div>
				<div className="input-item">
					{checkAnswerTwo}
					<label htmlFor={props.choiceTwo}>{props.choiceTwo}</label>
				</div>
				<Link onClick={submit} to={`/questions/${questionId}`}>
					<button type="submit" className="submit-btn">
						View Poll
					</button>
				</Link>
			</form>
		</div>
	);
};

export default Answered;
