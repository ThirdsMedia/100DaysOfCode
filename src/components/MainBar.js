import React from 'react';
import Search from './Search';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.background,
   // boxShadow: 'none',
	},
  logo: {
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
}));

export default function MainBar({ hasSearchInput }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid container>
            <IconButton edge="start" color="primary">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid container justify='center'>
            <Avatar className={classes.logo} src='./logo192.png' /> 
          </Grid>
          {
            hasSearchInput 
              ?
                <Grid container justify='center'>
                  <Search />    
                </Grid>
              : false
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
