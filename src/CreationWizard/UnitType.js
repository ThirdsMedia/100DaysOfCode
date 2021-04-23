import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useForm } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Divider,
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

export default function UnitType() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const { register, handleSubmit } = useForm();
  const [unitType, setUnitType] = useState(cocktail.recipe.unit || '');

  const handleUnitType = (e) => {
    setUnitType(e.target.value)
  }
  
  const onSubmitForm = (data) => {
    cocktail.buildFromInput(data)
  }

  return (
    <form 
      noValidate 
      className={classes.formContainer}
      onSubmit={handleSubmit((data) => onSubmitForm(data))}
    >
      <FormControl component='fieldset'>
        <FormLabel>
          What unit of measurement will this cocktail be built with?
        </FormLabel>
        <Divider />
        <RadioGroup name='unit' value={unitType} onChange={handleUnitType}>
          <FormControlLabel 
            {...register('unit')} 
            value='imperial' 
            label='Imperial' 
            control={<Radio />} 
          />
          <FormControlLabel 
            {...register('unit')} 
            value='metric' 
            label='Metric' 
            control={<Radio />} 
          />
        </RadioGroup>
      </FormControl>
      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={cocktail.handleNext}
        >
          Keep going
        </Button>
      </div>
    </form>
  );
}

