import React from 'react';
import MainBar from './components/MainBar';
import CardItem from './components/CardItem';
import exampleDatabase from './exampleDatabase';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

/* 
 * Up next: Figure out how to automatically adjust spacing in between MainBar and the List below it so that they don't overlap
 * Fix the pictures
 */

export default function ProductList() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="lg">
      <MainBar hasSearchInput/>
      <Grid container spacing={3}>
        {
          exampleDatabase.map((item) => {
            return (
              <Grid item>
                <CardItem item={item} />
              </Grid>
            );
          })
        }
      </Grid>
    </Container>
  );
}
