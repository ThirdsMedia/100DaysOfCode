import React, { useState, useEffect } from 'react';
import { 
	IconButton,
	Typography,
	Collapse
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'

/* Styles */
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
	},
	container: {
		textAlign: 'center',
	},
	title: {
		flexGrow: "1",
		fontFamily: "Nunito",
		color: '#fff',
		fontSize: '4.5rem'
	},
  colorText: {
    color: theme.palette.primary.main
  },
	goDown: {
    color: theme.palette.primary.main,
		fontSize: '4rem',
	},
}));

export default function Header() {
	const classes = useStyles();
  const [checked, setChecked] = useState(false);

	useEffect(() => {
		setChecked(true)
  }, []);

	return (
		<main className={classes.root} id="header">
			<Collapse appear in={checked} { 
				... checked ? { timeout: 1000 } : {}
			}>
				<div className={classes.container}>
					<Typography className={classes.title} component="h1" variant="h2">
						Welcome to<br/>
            The <span className={classes.colorText}>JADE </span>App
					</Typography>
					<Scroll to="call-to-action" smooth="true">
						<IconButton>
							<ExpandMoreIcon className={classes.goDown} />
						</IconButton>
					</Scroll>
				</div>
			</Collapse>
		</main>				
	);
}
