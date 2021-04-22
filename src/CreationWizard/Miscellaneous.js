import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  Typography,
  TextField,
  Button,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  submitButton: {
    height: theme.spacing(7),
    margin: theme.spacing(2),    
  },
  nextButton: {
    borderRadius: 37,
    textTransform: 'none',
    margin: 10,
    fontFamily: 'Nunito',
  },
}));

export default function Miscellaneous() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const [misc, setMisc] = useState({});
  const [inputs, setInputs] = useState([{}]);
  const currentInput = inputs.length

  const addNewInput = () => {
    setInputs([...inputs, {}])
  }

  const removeInput = (e, id) => {
    const input = [...inputs]
    input.splice(id, 1);
    setInputs(input);
  }

  const onChangeInput = (e) => {
    setMisc({...misc, [e.target.name]: e.target.value});
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    // find a single method to use from CocktailProvider that works for arrays, objects, and object elements
  }

  return (
    <form className={classes.formContainer} onSubmit={onSubmitForm}>
      <Typography>
        Are there any dry or miscellaneous ingredients?
      </Typography>
      {
        inputs.map((input, id) => {
          return (
            <div>
              {
                currentInput >= 1 ?
                <IconButton
                  id={id}
                  name={`ingredient-${id}`}
                  className={classes.submitButton}
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={(e) => removeInput(e, id)}
                >
                  <RemoveIcon fontSize="large"/>
                </IconButton>
                : false
              }
              <TextField 
                key={`ingredient-${id}`}
                name='name'
                label='Ingredient'
                variant='outlined'
                margin='normal'
                onChange={(e) => onChangeInput(e)}
              />
              {
                currentInput === id+1 ?
                <IconButton
                  className={classes.submitButton}
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={addNewInput}
                //  onClick={onAddIngredientsToArray}
                >
                  <AddBoxIcon fontSize="large"/>
                </IconButton>
                : false
              }
            </div>
          );
        })
      }
      <div className={classes.buttonDiv}>
        <Button
          className={classes.nextButton}
          type="submit"
          color="primary"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
          onClick={cocktail.handleNext}
        >
        { currentInput <= 1 ? 'Skip' : 'Next' }
        </Button>
      </div>
    </form>
  );
}
