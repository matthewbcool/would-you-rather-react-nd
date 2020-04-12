import React, { useState } from 'react';
import '../home/home.css';
import { Link, useHistory } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered, setAnsweredQuestions, currentAnswered } from '../home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

const UnAnswered = (props) => {
	const history = useHistory();
	const [answer, setAnswer] = useState('');
	const [questionId, setQuestionId] = useState('');
	const dispatch = useDispatch();
	const answered = useSelector(currentAnswered);
	const onFormChange = (e) => {
		setAnswer(e.target.value);
		setQuestionId(e.target.value.toLowerCase().split(' ').join(''));
	};

	const submit = (e) => {
		console.log(e);

		//set this question to the answered array
		dispatch(setAnsweredQuestions([...answered, props.questionObject]));
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
