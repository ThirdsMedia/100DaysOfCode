import React from 'react';
import { 
	AppBar, 
	IconButton,
	Toolbar,
	Typography,
	Container
} from '@material-ui/core';

/* Styles */
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	},
	appBar: {
		background: 'none',
	},
	appBarWrapper: {
		width: "80%",
		margin: "0 auto"
	},
	icon: {
		color: "#fff",
		fontSize: "2rem"
	},
	title: {
		flexGrow: "1",
		fontFamily: "Nunito",
		color: '#fff'
	},
	colorTitle: {
		color: "#ff4081"
	},
})

export default function Header() {
	const classes = useStyles();

	return (
		<main className={classes.root}>
			<AppBar className={classes.appBar} elevation={0}>
				<Toolbar className={classes.appBarWrapper}>
					<Typography className={classes.title} component="h1" variant="h3">
						The<span className={classes.colorTitle}>Road.</span>
					</Typography>
					<IconButton>
						<SortIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div>
				<Typography className={classes.title} component="h1" variant="h2">
					Welcome to<br/>
					The <span className={classes.colorTitle}>Road.</span>
				</Typography>
			</div>
		</main>				
	);
}
