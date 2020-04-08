// At some point this could be a firestore db

const data = [
	{
		user: 'Megaman',
		profile: '/images/mega-man.png',
		questions: [
			{
				choiceOne: 'adventure with Rush',
				choiceTwo: 'adventure with Zero',
				//below is an array of user names who voted on this question
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
		],
		answered: [],
	},
	{
		user: 'Naruto',
		profile: '/images/naruto.png',
		questions: [
			{
				choiceOne: 'eat ramen',
				choiceTwo: 'train with Rock Lee',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
		],
		answered: [],
	},
	{
		user: 'Gwen Stacy',
		profile: '/images/gwen-stacy.jpg',
		questions: [
			{
				choiceOne: 'study chemistry',
				choiceTwo: 'study biology',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
			{
				choiceOne: 'Marry Peter Parker',
				choiceTwo: 'Marry Spiderman',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
		],
		answered: [],
	},
];

export default data;
