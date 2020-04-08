import React from 'react';
import DisplayAnswer from '../home/DisplayAnswer';
import UnAnswered from '../home/UnAnswered';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
const HomeScreen = () => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			<h1>HOME</h1>
			<ul>
				<li>
					<Link to={`/questions`}>UnAnswered Questions</Link>
				</li>
				<li>
					<Link to={`/answered`}>Answered Questions</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={`${path}`}>
					<UnAnswered
						choiceOne="marry Spiderman"
						choiceTwo="marry Peter Parker"
						profile={'../images/gwen-stacy.jpg'}
						userName={'Gwen Stacy'}
					/>
				</Route>
				<Route path={'/answered'}>
					<UnAnswered
						choiceOne="answered"
						choiceTwo="marry Peter Parker"
						profile={'../images/gwen-stacy.jpg'}
						userName={'Gwen Stacy'}
					/>
				</Route>
				<Route path={`questions/:${path}`}>
					<DisplayAnswer />
				</Route>
			</Switch>
		</div>
	);
};

export default HomeScreen;
