import React from 'react';
import {
  Container,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cocktail.jpg)'}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  info: {
    minHeight: '100vh',
  },
  scrollButton: {
    fontSize: '4em',
  },
  icons: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.background,
  },
  title: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    margin: 20,
  },
}));

export default function ItemSheet({ item }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header} id='drink-image'>
        <Scroll to='drink-info' smooth='true'>
          <IconButton>
            <ExpandMoreIcon className={classes.scrollButton} />
          </IconButton>
        </Scroll>
      </div>
      <div id="drink-info" className={classes.info}>
        <AppBar position='sticky' className={classes.appBar}>
          <Toolbar>
            <IconButton>
              <FavoriteIcon className={classes.icons} />
            </IconButton>
            <Scroll to='drink-image' smooth='true'>
              <IconButton>
                <ExpandLessIcon />
              </IconButton>
            </Scroll>
          </Toolbar>
        </AppBar>
        <Typography component="h1" variant="h3" className={classes.title}>
          {item.name}
        </Typography>
      </div>
    </div>
  );
}
