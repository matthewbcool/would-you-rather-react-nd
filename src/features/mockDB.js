// At some point this could be a firestore db
// TODO maybe grab profile pic from user data directly in question data?

const data = [
	{
		user: 'Megaman',
		profile: '/images/mega-man.png',
		answers: [],
		questionCount: 1,
	},
	{
		user: 'Naruto',
		profile: '/images/naruto.png',
		answers: [],
		questionCount: 1,
	},
	{
		user: 'Gwen Stacy',
		profile: '/images/gwen-stacy.jpg',
		answers: [],
		questionCount: 2,
	},
	{
		questions: [
			{
				id: 'Gwen Stacy',
				timeCreated: 1586536290703,
				choiceOne: 'study chemistry',
				choiceTwo: 'study biology',
				choiceOneVotes: [],
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
				profile: '/images/mega-man.png',
				timeCreated: 1586536290702,
				choiceOne: 'eat ramen',
				choiceTwo: 'train with Rock Lee',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
			{
				id: 'Megaman',
				profile: '/images/naruto.png',
				timeCreated: 1586536290701,
				choiceOne: 'adventure with Rush',
				choiceTwo: 'adventure with Zero',
				choiceOneVotes: [],
				choiceTwoVotes: [],
			},
		],
	},
];

export default data;
