import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  buttonDiv: {
    textAlign: 'center',
  },
  nextButton: {
    borderRadius: 37,
    textTransform: 'none',
    margin: 10,
    fontFamily: 'Nunito',
  },
}));

export default function BasicInfo() {
  const classes = useStyles();
  const cocktail = useCocktail();

  return (
    <div className={classes.formContainer}>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='cocktail-name'
            name='cocktailName'
            value={cocktail.recipe.cocktailName}
            label='Cocktail Name'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildFromInput(e)}
          />
          <TextField 
            id='creator'
            name='creator'
            value={cocktail.recipe.creator}
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildFromInput(e)}
          />
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            name='location'
            value={cocktail.recipe.location}
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
            onChange={(e) => cocktail.buildFromInput(e)}
          />
          <TextField 
            id='date'
            name='date'
            value={cocktail.recipe.date}
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
            onChange={(e) => cocktail.buildFromInput(e)}
          />
        </Grid>
      </Grid>
      <TextField 
        id='description'
        name='description'
        value={cocktail.recipe.description}
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
        onChange={(e) => cocktail.buildFromInput(e)}
      />
      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<ExpandMoreIcon />}
          onClick={cocktail.handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
