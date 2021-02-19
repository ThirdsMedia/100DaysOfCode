import React from 'react';
import Search from './Search';

import {
  AppBar,
  Toolbar,
  Grid,
  Avatar,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

/* Style and image */
import { makeStyles } from '@material-ui/core/styles';
import tmImage from './assets/ThirdsMediaSmall.png';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.background,
	},
  logo: {
    height: theme.spacing(12),
    width: theme.spacing(15),
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
            <Avatar className={classes.logo} src={tmImage} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
