import React from 'react';
import MainBar from './MainBar';
import SideNav from './SideNav';
import CardList from './CardList';
import exampleDatabase from './exampleDatabase';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Icons */
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(6),
  },
}));

/*
 * Ok, done for now. To do next:
 *  - Center the Logo in the MainBar component
 *  - Make the SideNav fit the screen so you can see all the way to Z
 */

export default function Search() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid container spacing={0}>
        <MainBar />
        <SideNav />
      </Grid>
      <Grid container spacing={0}>
        <CardList data={exampleDatabase} />    
      </Grid>
    </Grid>
  );
}
