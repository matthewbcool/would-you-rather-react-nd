import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		value: 'nouser',
		loggedIn: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.value = action.payload;
		},
		toggleLogIn: state => {
			state.loggedIn = !state.loggedIn;
		},
	},
});

export const { toggleLogIn, setUser } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setCurrentUser = user => dispatch => {
	dispatch(setUser(user));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const currentUser = state => state.user.value;
export const isLoggedIn = state => state.user.loggedIn;

export default slice.reducer;
