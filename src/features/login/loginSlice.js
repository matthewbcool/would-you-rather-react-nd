import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		current: 'nouser',
		userObject: { profile: '', answers: [], questionCount: 0 },
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
		setAnsweredQuestions: (state, action) => {
			state.userObject.answers = action.payload;
		},
		setUnAnsweredQuestions: (state, action) => {
			state.userObject.toAnswer = action.payload;
		},
		addToQuestionCount: (state) => {
			state.userObject.questionCount += 1;
		},
	},
});

export const {
	toggleLogIn,
	setUser,
	setUserObject,
	setAnsweredQuestions,
	setUnAnsweredQuestions,
	addToQuestionCount,
} = slice.actions;

//actions
export const setCurrentUser = (user) => (dispatch) => {
	dispatch(setUser(user));
};
export const setCurrentUserObject = (user) => (dispatch) => {
	dispatch(setUserObject(user));
};
export const updateAnsweredQuestions = (user) => (dispatch) => {
	dispatch(setAnsweredQuestions(user));
};
export const updateUnAnsweredQuestions = (user) => (dispatch) => {
	dispatch(setUnAnsweredQuestions(user));
};

//exports
export const currentUser = (state) => state.user.current;
export const isLoggedIn = (state) => state.user.loggedIn;
export const currentUserObject = (state) => state.user.userObject;
export const answers = (state) => state.user.userObject.answers;
export const toAnswer = (state) => state.user.userObject.toAnswer;

export default slice.reducer;
