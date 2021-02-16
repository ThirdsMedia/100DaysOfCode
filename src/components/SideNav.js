import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  	sideNav: {
			display: 'flex',
			justifyContent: 'flex-end',
			position: 'fixed',
			fontWeight: 'bold',
			backgroundColor: 'green',
			width: 30,
		/* but how to make it fit the screen */
	},
})

export default function SideNav() {
	const classes = useStyles();

  	return (
			<Grid container className={classes.sideNav}>
				<List dense>
				{
					Array.from(Array(26), (e, i) => {
						const letter = String.fromCharCode(i+65)
						return (
							<ListItem 
								key={i}
								onClick={() => alert(letter)}
							>
								{letter}
							</ListItem>
						);
					})
				}
				</List>
			</Grid>
  	);
}
