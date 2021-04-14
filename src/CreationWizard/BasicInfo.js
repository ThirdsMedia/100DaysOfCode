import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  Container,
  TextField,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
}));

export default function BasicInfo() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const cocktailData = cocktail.theCocktailData;

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='cocktail-name'
            name='cocktailName'
            value={cocktailData.cocktailName}
            label='Cocktail Name'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildCocktailFromInput(e)}
            InputLabelProps={{ shrink: true}}
          />
          <TextField 
            id='creator'
            name='creator'
            value={cocktailData.creator}
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildCocktailFromInput(e)}
          />
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            name='location'
            value={cocktailData.location}
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildCocktailFromInput(e)}
          />
          <TextField 
            id='date'
            name='date'
            value={cocktailData.date}
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
            onChange={(e) => cocktail.buildCocktailFromInput(e)}
          />
        </Grid>
      </Grid>
      <TextField 
        id='description'
        name='description'
        value={cocktailData.description}
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
        onChange={(e) => cocktail.buildCocktailFromInput(e)}
      />
    </Container>
  );
}
