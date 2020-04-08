import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		current: 'nouser',
		userObject: { profile: './public/images.naruto.png' },
		loggedIn: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.current = action.payload;
		},
		toggleLogIn: (state) => {
			state.loggedIn = !state.loggedIn;
		},
		setUserObject: (state, action) => {
			state.userObject = action.payload;
		},
	},
});

export const { toggleLogIn, setUser, setUserObject } = slice.actions;

//actions
export const setCurrentUser = (user) => (dispatch) => {
	dispatch(setUser(user));
};
export const setCurrentUserObject = (user) => (dispatch) => {
	dispatch(setUserObject(user));
};

//exports
export const currentUser = (state) => state.user.current;
export const isLoggedIn = (state) => state.user.loggedIn;
export const currentUserObject = (state) => state.user.userObject;

export default slice.reducer;
