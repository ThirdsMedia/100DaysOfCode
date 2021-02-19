import React from 'react';
import MainBar from './MainBar';
import CardItem from './CardItem';
import exampleDatabase from './static/exampleDatabase';

/* Material UI Core */
import {
  Container,
  Box,
  Grid
} from '@material-ui/core';
/*import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
*/

/* Then design the Cards so they look professional next */

export default function ProductList() {
  return (
    <>
      <MainBar hasSearchInput />
        <Container component="main" maxWidth="lg">
          <Box mt={26}>
            <Grid container spacing={4} alignItems='center'>
            {
              exampleDatabase.map((card) => {
                return (
                  <Grid item>
                    <CardItem card={card} />
                  </Grid>
                );
              })
            }
            </Grid>
          </Box>
        </Container>
    </>
  );
}

