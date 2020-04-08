import React from 'react';

const CreateQestion = () => {
	const submitNewQuestion = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className="new-question-wrapper">
			<form onSubmit={submitNewQuestion}>
				<h3>Create a would you rather question.</h3>
				<h3>Would you rather...</h3>
				<label></label>
				<input />
				<label></label>
				<input />
				<button>Submit</button>
			</form>
		</div>
	);
};

export default CreateQestion;
