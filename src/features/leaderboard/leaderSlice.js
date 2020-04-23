import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'leaderboard',
	initialState: {
		userObjects: [
			{
				user: 'Megaman',
				profile: '/images/mega-man.png',
				answers: [],
				toAnswer: [],
				questionCount: 1,
			},
			{
				user: 'Naruto',
				profile: '/images/naruto.png',
				answers: [],
				toAnswer: [],
				questionCount: 1,
			},
			{
				user: 'Gwen Stacy',
				profile: '/images/gwen-stacy.jpg',
				answers: [],
				toAnswer: [],
				questionCount: 2,
			},
		],
	},
	reducers: {
		setLeaderboard: (state, action) => {
			state.userObjects = action.payload;
		},
	},
});

export const { setLeaderboard } = slice.actions;

//actions
export const updateLeaderBoard = (userObjects, currentUserObject) => (dispatch) => {
	let updatedUserObjects = [];
	userObjects.forEach((userObject) => {
		if (currentUserObject.user === userObject.user) {
			updatedUserObjects.push(currentUserObject);
		} else {
			updatedUserObjects.push(userObject);
		}
	});

	dispatch(setLeaderboard(updatedUserObjects));
};

//exports
export const userObjects = (state) => state.leaderboard.userObjects;

export default slice.reducer;
