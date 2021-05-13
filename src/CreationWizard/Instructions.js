import React from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  formControl: {
    margin: theme.spacing(1),
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

const glassware = [
  "Rocks",
  "Collins",
  "Highball",
  "Lowball",
  "Hurricane",
  "Tiki",
  "Coupe",
  "Nick and Nora",
  "Martini",
];

const methods = [
  "Shake",
  "Stir",
  "In Glass",
  "Whip Shake",
  "Infuse",
];

export default function Instructions() {
  const classes = useStyles();
  const cocktail = useCocktail();

  const onSubmit = (data) => {
    cocktail.buildFromInput(data);
    cocktail.handleNext();
  }

  return (
    <form className={classes.formContainer} onSubmit={cocktail.handleSubmit((data) => onSubmit(data))}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Build Method</InputLabel>
        <Select
          native
          {...cocktail.register('method', { required: true })}
          defaultValue={cocktail.recipe.method}
          inputProps={{
            name: 'method',
            id: 'method-native',
          }}
        >
          <option aria-label="None" value="" />
          {
            methods.map((method) => {
              return <option value={method}>{method}</option>
            })
          }
        </Select>
      </FormControl>
      {cocktail.errors.method ? <span className={classes.errors}>This field is required</span> : false}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Glassware</InputLabel>
        <Select
          native
          {...cocktail.register('glass', { required: true })}
          defaultValue={cocktail.recipe.glass}
        >
          <option aria-label="None" value="" />
          {
            glassware.map((glass) => {
              return <option value={glass}>{glass}</option>
            })
          }
        </Select>
      </FormControl>
      {cocktail.errors.glass ? <span className={classes.errors}>This field is required</span> : false}
      <TextField 
        id='instructions'
        {...cocktail.register('instructions', { required: true })}
        defaultValue={cocktail.recipe.instructions}
        label='Instructions'
        variant='outlined'
        margin='normal'
        multiline
        rows='5'
        maxrows='10'
      />
      {cocktail.errors.instructions ? <span className={classes.errors}>This field is required</span> : false}
      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
        >
          Almost there
        </Button>
      </div>
    </form>
  );
}