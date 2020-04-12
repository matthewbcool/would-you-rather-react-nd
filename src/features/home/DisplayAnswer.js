import React from 'react';
import { useParams } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered, setAnsweredQuestions, currentAnswered } from '../home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let answered = useSelector(currentAnswered);
	console.log(answered);
	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`${props.userName} asks:`}</h3>
				<img className="profile-pic" src={props.profile} alt={`${props.userName}-asks`} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question">
				<div className="input-item">
					<input type="radio" id={props.choiceOne} name="question" value={props.choiceOne} />
					<label htmlFor={props.choiceOne}>{props.choiceOne}</label>
				</div>
				<div className="input-item">
					<input type="radio" id={props.choiceTwo} name="question" value={props.choiceTwo} />
					<label htmlFor={props.choiceTwo}>{props.choiceTwo}</label>
				</div>
				<Link to={`/`}>
					<button type="submit" className="submit-btn">
						Back
					</button>
				</Link>
			</form>
		</div>
	);
};

export default DisplayAnswer;
