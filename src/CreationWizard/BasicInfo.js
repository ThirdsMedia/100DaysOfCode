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
  errors: {
    color: theme.palette.secondary.main,
  },
}));

export default function BasicInfo() {
  const classes = useStyles();
  const cocktail = useCocktail();

  const onSubmit = (data) => {
    cocktail.buildFromInput(data);
    cocktail.handleNext();
  }

  return (
    <form className={classes.formContainer} onSubmit={cocktail.handleSubmit((data) => onSubmit(data))}>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='name'
            {...cocktail.register('name', { required: true })}
            defaultValue={cocktail.recipe.name}
            label='Cocktail Name'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.name ? <span className={classes.errors}>This field is required</span> : false}
          <TextField 
            id='creator'
            {...cocktail.register('creator', { required: true })}
            defaultValue={cocktail.recipe.creator}
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.creator ? <span className={classes.errors}>This field is required</span> : false}
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            {...cocktail.register('location', { required: true })}
            defaultValue={cocktail.recipe.location}
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          {cocktail.errors.location ? <span className={classes.errors}>This field is required</span> : false}
          <TextField 
            id='date'
            {...cocktail.register('date', { required: true })}
            defaultValue={cocktail.recipe.date}
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
          />
          {cocktail.errors.date ? <span className={classes.errors}>This field is required</span> : false}
        </Grid>
      </Grid>
      <TextField 
        id='description'
        {...cocktail.register('description', { required: true })}
        defaultValue={cocktail.recipe.description}
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
      />
      {cocktail.errors.description ? <span className={classes.errors}>This field is required</span> : false}
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
