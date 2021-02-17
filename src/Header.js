import React, { useState, useEffect } from 'react';
import { 
	AppBar, 
	IconButton,
	Toolbar,
	Typography,
	Container,
	Collapse
} from '@material-ui/core';

/* Styles */
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
	container: {
		textAlign: 'center',
	},
	icon: {
		color: "#fff",
		fontSize: "2rem"
	},
	header: {
		flexGrow: "1",
		fontFamily: "Nunito",
		color: '#fff'
	},
	title: {
		flexGrow: "1",
		fontFamily: "Nunito",
		color: '#fff',
		fontSize: '4.5rem'
	},
	colorText: {
		color: "#ff4081"
	},
	goDown: {
		color: '#ff4081',
		fontSize: '4rem',
	},
})

export default function Header() {
	const classes = useStyles();
	const [checked, setChecked] = useState(false)
	useEffect(() => {
		setChecked(true)
	});

	return (
		<main className={classes.root}>
			<AppBar className={classes.appBar} elevation={0}>
				<Toolbar className={classes.appBarWrapper}>
					<Typography className={classes.header} component="h1" variant="h3">
						The<span className={classes.colorText}>Road.</span>
					</Typography>
					<IconButton>
						<SortIcon className={classes.icon} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Collapse appear in={checked} { 
				... checked ? { timeout: 1000 } : {}
			}>
				<div className={classes.container}>
					<Typography className={classes.title} component="h1" variant="h2">
						Welcome to<br/>
						The <span className={classes.colorText}>Road.</span>
					</Typography>
					<IconButton>
						<ExpandMoreIcon className={classes.goDown} />
					</IconButton>
				</div>
			</Collapse>
		</main>				
	);
}
