import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered } from '../home/homeSlice';
import { currentUser, currentUserObject, isLoggedIn, answers } from '../login/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplayAnswer = (props) => {
	let { id } = useParams();
	let dispatch = useDispatch();
	let answered = useSelector(answers);
	let user = useSelector(currentUser);
	let userObj = useSelector(currentUserObject);
	let votes = { one: 0, two: 0 };
	let userChoice = '';
	let currentQuestion = {};
	let choiceOneSelected = true;
	const findThisAnswer = () => {
		//loop threw the choices in answered to find the string that matches the id
		answered.forEach((answer) => {
			let choiceOne = answer.choiceOne.toLowerCase().split(' ').join('');
			let choiceTwo = answer.choiceTwo.toLowerCase().split(' ').join('');
			if (choiceOne.includes(id)) {
				currentQuestion = answer;
			}
			if (choiceTwo.includes(id)) {
				currentQuestion = answer;
				choiceOneSelected = false;
			}
		});
	};

	console.log(userObj);

	const setVoteForAnsweredList = () => {
		let choiceOneVotes = props.questionObject.choiceOneVotes;
		let choiceTwoVotes = props.questionObject.choiceTwoVotes;
		//set vote numbers
		votes.one = choiceOneVotes.length;
		votes.two = choiceTwoVotes.length;
		//check to see which choice the user voted for
		choiceOneVotes.forEach((userName) => {
			if (userName === user) {
				userChoice = 'one';
			}
		});
		choiceTwoVotes.forEach((userName) => {
			if (userName === user) {
				userChoice = 'two';
			}
		});
		console.log(userChoice);
	};
	if (props.questionObject) {
		//set if we are in the view answer list
		setVoteForAnsweredList();
	}

	let answerData = id
		? {
				profile: currentQuestion.profile,
				userName: currentQuestion.id,
				choiceOne: currentQuestion.choiceOne,
				choiceTwo: currentQuestion.choiceTwo,
				pollMode: true,
		  }
		: {
				profile: props.profile,
				userName: props.userName,
				choiceOne: props.choiceOne,
				choiceTwo: props.choiceTwo,
				pollMode: false,
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
					{answerData.pollMode ? (
						<Fragment>
							<h4 className={choiceOneSelected ? 'selected' : ''}>{answerData.choiceOne}</h4>
							{choiceOneSelected ? <span className="poll-choice-text">{'<--- You voted!'}</span> : null}
						</Fragment>
					) : (
						<Fragment>
							<input
								type="radio"
								id={answerData.choiceOne}
								name="question"
								value={answerData.choiceOne}
								defaultChecked={userChoice === 'one' ? true : false}
								disabled={userChoice === 'one' || userChoice === 'two' ? true : false}
							/>
							<label htmlFor={answerData.choiceOne}>{answerData.choiceOne}</label>
						</Fragment>
					)}
				</div>
				<div className="input-item">
					{answerData.pollMode ? (
						<Fragment>
							<h4 className={choiceOneSelected ? '' : 'selected'}>{answerData.choiceTwo}</h4>{' '}
							{choiceOneSelected ? null : <span className="poll-choice-text">{'<--- You voted!'}</span>}
						</Fragment>
					) : (
						<Fragment>
							<input
								type="radio"
								id={answerData.choiceTwo}
								name="question"
								value={answerData.choiceTwo}
								defaultChecked={userChoice === 'two' ? true : false}
								disabled={userChoice === 'one' || userChoice === 'two' ? true : false}
							/>
							<label htmlFor={answerData.choiceTwo}>{answerData.choiceTwo}</label>
						</Fragment>
					)}
				</div>
				{answerData.pollMode ? (
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
