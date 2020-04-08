import React from 'react';
import { useParams } from 'react-router-dom';
const DisplayAnswer = () => {
	let { id } = useParams();

	return <div>display answer</div>;
};

export default DisplayAnswer;
