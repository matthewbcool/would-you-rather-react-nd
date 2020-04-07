import React from 'react';
import '../home/home.css';
const UnAnswered = (props) => {
	const onFormChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className="unanswered-wrapper">
			<div className="profile-asking-wrapper">
				<img className="profile-pic" src={props.profile} alt={`${props.userName}-asks`} />
				<h3>{`${props.userName} asks:`}</h3>
			</div>
			<h2>Would you rather...</h2>
			<form onChange={onFormChange}>
				<div className="input-item">
					<input type="radio" id="huey" name="drone" value="huey" />
					<label for="huey">wowwoowwoowo</label>
				</div>
				<div className="input-item">
					<input type="radio" id="dewey" name="drone" value="dewey" />
					<label for="dewey">Dewey</label>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UnAnswered;
