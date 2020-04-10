import React, { useState } from 'react';
import '../home/home.css';

const UnAnswered = (props) => {
	const [answer, setAnswer] = useState('');
	const onFormChange = (e) => {
		setAnswer(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		console.log(answer.toLowerCase().split(' ').join(''));
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
				<button type="submit" className="submit-btn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default UnAnswered;
