import React, { useState, useEffect } from 'react';
import { 
	AppBar, 
	IconButton,
	Toolbar,
	Typography,
	Collapse
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'

/* Styles */
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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
    color: theme.palette.primary.main
  },
	goDown: {
    color: theme.palette.primary.main,
		fontSize: '4rem',
	},
}));

export default function Header() {
	const classes = useStyles();
	const [checked, setChecked] = useState(false)
	useEffect(() => {
		setChecked(true)
  }, []);

	return (
		<main className={classes.root} id="header">
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
          <Typography className={classes.header} component="h1" variant="h3">
            Thirds<span className={classes.colorText}>Media</span>
          </Typography>
        </Toolbar>
      </AppBar>
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
