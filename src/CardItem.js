import React from 'react';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imageUrl from './assets/logo192.png';

const useStyles = makeStyles({
	card: {
		borderRadius: 10,
		width: 250,
		height: 275,
		textAlign: 'center',
	},
	media: {
		height: 175,
		width: '100%',
	},
	text: {
		fontWeight: 'bold',
	}
});

export default function CardItem({ card }) {
	const classes = useStyles();
	console.log(imageUrl)

	return (
   	<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={imageUrl}
					title="MoonBoots"
				/>
				<CardContent className={classes.text}>
					{card.name}
				</CardContent>
			</CardActionArea>
    </Card>
	);
}

