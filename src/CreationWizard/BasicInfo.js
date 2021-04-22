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
  const { 
    register, 
    handleSubmit, 
  //  watch, 
   // formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    cocktail.buildFromInput(data)
  }

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Grid container spacing={1}>
        <Grid item xs>
          <TextField 
            id='name'
            {...register('name')}
            value={cocktail.recipe.name}
            label='Cocktail Name'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          <TextField 
            id='creator'
            {...register('creator')}
            value={cocktail.recipe.creator}
            label='Creator'
            variant='outlined'
            margin='normal'
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <TextField 
            id='location'
            {...register('location')}
            name='location'
            value={cocktail.recipe.location}
            label='Location'
            variant='outlined'
            margin='normal'
            fullWidth
          />
          <TextField 
            id='date'
            {...register('date')}
            value={cocktail.recipe.date}
            variant='outlined'
            margin='normal'
            fullWidth
            type='date'
          />
        </Grid>
      </Grid>
      <TextField 
        id='description'
        {...register('description')}
        value={cocktail.recipe.description}
        label='Description'
        variant='outlined'
        margin='normal'
        fullWidth
        multiline
        rows='6'
        rowsMax='10'
      />
      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={cocktail.handleNext}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
