import React from 'react';

const info = [
	{
		id: 0,
		title: "Path No. 1",
		desc: "Here you can just enjoy a nice little walk in the woods and such.",
		image: process.env.PUBLIC_URL + "/assets/dark-forest.jpeg",
		direction: 'left',
	},
	{
		id: 1,
		title: "Path No. 2",
	  desc: "This is one path where you find forest houses and get killed brutally by mutants",
		image: process.env.PUBLIC_URL + "/assets/forest-houses.jpg",
		direction: 'right',
	}
];

export default info;
