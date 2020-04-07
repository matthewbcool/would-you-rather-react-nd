import React from 'react';
import UnAnswered from '../home/UnAnswered';

const HomeScreen = () => {
	return (
		<div>
			<h1>HOME</h1>
			<UnAnswered profile={'../images/gwen-stacy.jpg'} userName={'Gwen Stacy'} />
		</div>
	);
};

export default HomeScreen;
