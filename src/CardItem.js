import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

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

/* 
 * Fix images still....
 */

export default function CardItem({ card }) {
	const classes = useStyles();

	return (
   	<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={require("./logo192.png")}
					title="MoonBoots"
				/>
				<CardContent className={classes.text}>
					{card.name}
				</CardContent>
			</CardActionArea>
    </Card>
	);
}

