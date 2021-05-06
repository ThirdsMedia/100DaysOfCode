import React from 'react';
import {
  Avatar,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    flexGrow: 1,
    background: 'transparent',
    boxShadow: 'none',
  },
  button: {
    fontFamily: 'Nunito',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },
  },
  loginButton: {
    color: 'white',
    textTransform: 'none',
    backgroundColor: theme.palette.primary.main,    
    fontFamily: 'Nunito',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default function StartPageBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="transparent"
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton href="/" edge="start"> 
          <Avatar src={'../assets/ThirdsMediaSmall.png'} />
        </IconButton>
        <div className={classes.root}></div>
        <Button className={classes.button} href="/about">About</Button>
        <Button className={classes.button} href="/contact">Contact Us</Button>
        <Button className={classes.button}>Training</Button>
        <Button className={classes.loginButton} href="/signin" variant="contained">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
