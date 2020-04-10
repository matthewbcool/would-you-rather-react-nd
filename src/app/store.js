import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/login/loginSlice';
import homeReducer from '../features/home/homeSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		home: homeReducer,
	},
});
