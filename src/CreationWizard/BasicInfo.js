import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useForm } from 'react-hook-form';
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

  const onSubmit = (data) => {
    if (!cocktail.formError) {
      cocktail.buildFromInput(data)
      cocktail.handleNext()
    }
  }

  // Instead of <span>, you should set an error. If the error is not null
  return (
    <form className={classes.formContainer} onSubmit={cocktail.handleSubmit((data) => onSubmit(data))}>
      <span>{cocktail.formError}</span>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='name'
            {...cocktail.register('name', { required: true })}
            value={cocktail.recipe.name}
            label='Cocktail Name'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.name && cocktail.setFormError("You forgot to enter a cocktail name")}
          <TextField 
            id='creator'
            {...cocktail.register('creator', { required: true })}
            value={cocktail.recipe.creator}
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.creator && cocktail.setFormError("You forgot to enter a creator name")}
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            {...cocktail.register('location', { required: true })}
            name='location'
            value={cocktail.recipe.location}
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.location && cocktail.setFormError("You forgot to set a location")}
          <TextField 
            id='date'
            {...cocktail.register('date', { required: true })}
            value={cocktail.recipe.date}
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
          />
          {cocktail.errors.date && cocktail.setFormError("You forgot to enter a creation date")}
        </Grid>
      </Grid>
      <TextField 
        id='description'
        {...cocktail.register('description', { required: true })}
        value={cocktail.recipe.description}
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
      />
      {cocktail.errors.description && cocktail.setFormError("You forgot to enter a description")}

      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
