import React from 'react';
import MainBar from './components/MainBar';
import CardItem from './CardItem';
import exampleDatabase from './exampleDatabase';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
/*import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
*/

/* Just fix the pictures and the frontend for this page should be good to go */
/* Then design the Cards so they look professional next */

export default function ProductList() {
  return (
    <React.Fragment>
      <MainBar hasSearchInput />
      <div>
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
      </div>
    </React.Fragment>
  );
}

