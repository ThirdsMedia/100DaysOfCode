import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import { makeStyles } from '@material-ui/core/styles';

/*
const useStyles = makeStyles({
	box: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})
*/

export default function MainBar() {
//	const classes = useStyles();

  return (
    <AppBar style={{background: 'transparent'}}>
      <Toolbar>
        <IconButton edge="start" color="primary">
          <MenuIcon />
        </IconButton>
      </Toolbar>
			<Avatar src="./logo192.png"/>	
    </AppBar>
  );
}
