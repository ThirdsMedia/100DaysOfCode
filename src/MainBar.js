import React from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
//  Menu,
//  MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';

/* Style and image */
import { makeStyles } from '@material-ui/core/styles';
import tmImage from './assets/ThirdsMediaSmall.png';

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.background,
    boxShadow: 'none',
  },
  menuButton: {
    color: theme.palette.primary.main,
  },
  logo: {
    height: theme.spacing(7),
    width: theme.spacing(10),
  },
}));

export default function MainBar({ hasLogo }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {
          hasLogo ?
            <Avatar className={classes.logo} src={tmImage} />
          : false
        }
      </Toolbar>
    </AppBar>
  );
}

