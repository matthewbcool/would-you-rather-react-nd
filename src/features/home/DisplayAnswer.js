import React from 'react';
import { useParams } from 'react-router-dom';
import { currentUnAnswered, setCurrentUnAnswered, setAnsweredQuestions, currentAnswered } from '../home/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

const DisplayAnswer = () => {
	let { id } = useParams();
	let answered = useSelector(currentAnswered);
	console.log(answered);
	return <div>display answer {id}</div>;
};

export default DisplayAnswer;
