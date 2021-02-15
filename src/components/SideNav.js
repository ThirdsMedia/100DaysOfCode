import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  	sideNav: {
		justifyContent: 'flex-end',
		position: 'fixed',
		marginTop: 50,
		fontWeight: 'bold',
		/* but how to make it fit the screen */
	},
})

export default function SideNav() {
	const classes = useStyles();

  	return (
			<Grid container className={classes.sideNav}>
				<Grid item>
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
			</Grid>
  	);
}
