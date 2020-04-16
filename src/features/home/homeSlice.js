import { createSlice } from '@reduxjs/toolkit';
// evetually we will want to retrive the initial state from the db and update the db with the async action
export const slice = createSlice({
	name: 'home',
	initialState: {
		unAnsweredQuestions: [
			{
				id: 'Gwen Stacy',
				profile: '/images/gwen-stacy.jpg',
				timeCreated: 1586536290703,
				choiceOne: 'study chemistry',
				choiceTwo: 'study biology',
				choiceOneVotes: ['Naruto'],
				choiceTwoVotes: [],
			},
			{
				id: 'Gwen Stacy',
				profile: '/images/gwen-stacy.jpg',
				timeCreated: 1586536290704,
				choiceOne: 'Marry Peter Parker',
				choiceTwo: 'Marry Spiderman',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
			{
				id: 'Naruto',
				profile: '/images/naruto.png',
				timeCreated: 1586536290702,
				choiceOne: 'eat ramen',
				choiceTwo: 'train with Rock Lee',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
			{
				id: 'Megaman',
				profile: '/images/mega-man.png',
				timeCreated: 1586536290701,
				choiceOne: 'adventure with Rush',
				choiceTwo: 'adventure with Zero',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
		],
		answeredQuestions: [],
	},
	reducers: {
		setUnansweredQuestions: (state, action) => {
			state.unAnsweredQuestions = action.payload;
		},
		addQuestionToUnAnswered: (state, action) => {
			state.unAnsweredQuestions = action.payload;
		},
		setAnsweredQuestions: (state, action) => {
			state.answeredQuestions = action.payload;
		},
	},
});

export const { setUnansweredQuestions, addQuestionToUnAnswered, setAnsweredQuestions } = slice.actions;

//actions
export const setCurrentUnAnswered = (home) => (dispatch) => {
	dispatch(setUnansweredQuestions(home));
};
export const addQuestion = (home) => (dispatch) => {
	dispatch(addQuestionToUnAnswered(home));
};
export const updateAnsweredQuestions = (home) => (dispatch) => {
	dispatch(setAnsweredQuestions(home));
};

//exports
export const currentUnAnswered = (state) => state.home.unAnsweredQuestions;
export const currentAnswered = (state) => state.home.answeredQuestions;
export default slice.reducer;
