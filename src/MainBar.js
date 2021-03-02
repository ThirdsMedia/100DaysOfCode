import React from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Typography,  
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SortIcon from '@material-ui/icons/Sort';

/* Style and image */
import { makeStyles } from '@material-ui/core/styles';
import tmImage from './assets/ThirdsMediaSmall.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    flexGrow: 1,
    background: 'none',
    boxShadow: 'none',
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto"
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  header: {
    flexGrow: "1",
    fontFamily: "Nunito",
    color: '#fff'
  },
  colorText: {
    color: theme.palette.secondary.main,    
  },
  menuButton: {
    color: theme.palette.primary.main,
  },
  logo: {
    height: theme.spacing(7),
    width: theme.spacing(10),
  },
}));

export default function MainBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.appBarWrapper}>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
          <Typography className={classes.header} component="h1" variant="h3">
            Thirds<span className={classes.colorText}>Media</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

