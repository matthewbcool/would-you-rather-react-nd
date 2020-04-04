import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/login/loginSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
	},
});
