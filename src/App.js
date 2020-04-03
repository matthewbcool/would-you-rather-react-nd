import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Nav from './features/nav/Nav';
import './App.css';
import HomeScreen from './features/home/HomeScreen';
import LeaderBoard from './features/leaderboard/LeaderBoard';
import NewQuestion from './features/new_qestion/NewQuestion';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
					<Route exact path="/new-question">
						<NewQuestion />
					</Route>
					<Route path="/leaderboards">
						<LeaderBoard />
					</Route>
				</Switch>

				<header className="App-header">
					<Counter />
				</header>
			</div>
		</Router>
	);
}

export default App;
