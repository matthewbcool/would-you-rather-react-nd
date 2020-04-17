import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/login/loginSlice';
import homeReducer from '../features/home/homeSlice';
import leaderboardReducer from '../features/leaderboard/leaderSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		home: homeReducer,
		leaderboard: leaderboardReducer,
	},
});
