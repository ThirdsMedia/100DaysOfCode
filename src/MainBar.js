import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	appBar: {
		boxShadow: 'none',
		background: 'transparent',
		position: 'fixed',
	},
  searchBox: {
    margin: 20,
    borderRadius: 50,
    width: 700,
	},
})

export default function MainBar() {
	const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
			<Toolbar>
				<IconButton edge="start" color="primary">
					<MenuIcon />
				</IconButton>
				<Avatar src="./logo192.png"/>	
				<TextField 
					id="search"
					variant="outlined"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />              
							</InputAdornment>
						),
						className: classes.searchBox
					}}
				/>
			</Toolbar>
    </AppBar>
  );
}
