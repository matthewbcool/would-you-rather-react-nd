import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import Nav from './features/nav/Nav';
import './App.css';
import HomeScreen from './features/home/HomeScreen';
import UnAnswered from './features/home/UnAnswered';
import LeaderBoard from './features/leaderboard/LeaderBoard';
import NewQuestion from './features/new_qestion/NewQuestion';
import Login from './features/login/Login';
import PrivateRoute from './features/private_route/PrivateRoute';
import NoMatch from './features/no_match_route/NoMatch';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<PrivateRoute exact path="/">
						<HomeScreen />
					</PrivateRoute>
					<PrivateRoute exact path="/new-question">
						<NewQuestion />
					</PrivateRoute>
					<PrivateRoute path="/leaderboards">
						<LeaderBoard />
					</PrivateRoute>
					<Route path="/login">
						<Login />
					</Route>

					<Route path="*">
						<NoMatch />
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
