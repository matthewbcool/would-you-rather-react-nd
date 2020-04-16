import React from 'react';
import { useParams } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered, setAnsweredQuestions, currentAnswered } from '../home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let answered = useSelector(currentAnswered);
	let answerData = id
		? {
				profile: props.profile,
				userName: props.userName,
				choiceOne: props.choiceOne,
				choiceTwo: props.choiceTwo,
				backBtn: true,
		  }
		: {
				profile: props.profile,
				userName: props.userName,
				choiceOne: props.choiceOne,
				choiceTwo: props.choiceTwo,
				backBtn: false,
		  };
	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<h3>{`${answerData.userName} asks:`}</h3>
				<img className="profile-pic" src={answerData.profile} alt={`${answerData.userName}-asks`} />
			</div>
			<h2>Would you rather...</h2>
			<form name="question">
				<div className="input-item">
					<input type="radio" id={answerData.choiceOne} name="question" value={answerData.choiceOne} />
					<label htmlFor={answerData.choiceOne}>{answerData.choiceOne}</label>
				</div>
				<div className="input-item">
					<input type="radio" id={answerData.choiceTwo} name="question" value={answerData.choiceTwo} />
					<label htmlFor={answerData.choiceTwo}>{answerData.choiceTwo}</label>
				</div>
				{answerData.backBtn ? (
					<Link to={`/`}>
						<button type="submit" className="submit-btn">
							Back
						</button>
					</Link>
				) : (
					<Link to={`/questions/${id}`}>
						<button type="submit" className="submit-btn">
							View Poll
						</button>
					</Link>
				)}
			</form>
		</div>
	);
};

export default DisplayAnswer;
