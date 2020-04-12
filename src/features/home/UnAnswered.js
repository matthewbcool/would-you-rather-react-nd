import React, { useState } from 'react';
import '../home/home.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import DisplayAnswer from './DisplayAnswer';

const UnAnswered = (props) => {
	const history = useHistory();
	const [answer, setAnswer] = useState('');
	const onFormChange = (e) => {
		setAnswer(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		let id = answer.toLowerCase().split(' ').join('');
		history.push(`/questions/${id}`);
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
				<Link to="/questions/:id">Modus Create</Link>
			</form>
			<Switch>
				<Route
					path="/questions/:id"
					children={<DisplayAnswer choiceOne={props.choiceOne} choiceTwo={props.choiceTwo} />}
				/>
			</Switch>
		</div>
	);
};

export default UnAnswered;
