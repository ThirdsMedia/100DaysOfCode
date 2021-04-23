import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useForm } from 'react-hook-form';
import {
  Grid,
  TextField,
  IconButton,
  FormControl,  
  Select,
  ListSubheader,
  MenuItem,
  Button,
  Typography,
  Slider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  input: {
    width: 900,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  nextItem: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'flex-end',
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

const types = [
  "Base Spirit",
  "Modifier",
  "Non-alcoholic",
];

function MinusButton({ props }) {
  const { 
    id, 
    inputs, 
    setInputs,
    spiritObject,
    setSpiritObject,
    ingredientsArray,
    setIngredientsArray
  } = props;
  
  // Pretty sure this works appropriately, however I'm rendering something wrong in Ingredients
  // Look into using delete() or array.filter to remove items as well
  const removeInput = (e, id) => {
    console.log("Current input from remove button: ", inputs, inputs[id], inputs[id].id)
    const tmpInput = [...inputs]
    console.log("TmpInput: ", tmpInput)
    // remove from the array using something other then an id
    //tmpInput.splice(inputs[id] 1);
    delete(tmpInput[id])
    console.log("inputs after splice: ", tmpInput, tmpInput[id], tmpInput[id].id)
    setInputs(tmpInput);
  }

  return (
    <div>
      {
        inputs.length > 1 ?
          <IconButton
            id={id}
            color="primary"
            onClick={(e) => removeInput(e, id)}
          >
            <RemoveIcon fontSize="large"/>
          </IconButton>
        : false
      }
    </div>
  );
}

function PlusButton({ props }) {
  const { 
    id, 
    inputs, 
    setInputs, 
    assignId,
    spiritObject, 
    setSpiritObject, 
    ingredientsArray, 
    setIngredientsArray 
  } = props;

  // WAY TO GO THIS WORKS FIRST TRY
  const addIngredientToArray = () => {
    inputs[id] = { id: id, ...spiritObject}
    setIngredientsArray([...ingredientsArray, inputs[id]])
    setInputs([...inputs, {}])
    setSpiritObject({})
  }

  return (
    <div>
      {
        inputs.length === id+1 ? 
          <IconButton
            color="primary"
            onClick={() => addIngredientToArray()}
          >
            <AddBoxIcon fontSize="large"/>
          </IconButton>
        : false
      }
    </div>
  )
}
  
export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const { register, handleSubmit } = useForm();
  const [spiritObject, setSpiritObject] = useState({});
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [inputs, setInputs] = useState([{}]);

  // This works yo!
  console.log("From ingredients: ", ingredientsArray)

  // Success. Now get the Slider working too, and add an id field to spiritOject
  const onSubmit = () => {
    cocktail.addIngredients(ingredientsArray)
  }

  // Now just need to get this working and then make onSubmit add the ingredientsArray to the cocktail object
  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const onChangeInput = (e) => {
    // no fucking idea this doesn't work
    //setSpiritObject({...spiritObject, id: [e.target.id]})
    setSpiritObject({...spiritObject, [e.target.name]: e.target.value})
  }

  return (
    <form 
      noValidate 
      className={classes.formContainer}
      id='ingredients'
      name='ingredients'
      onSubmit={handleSubmit(onSubmit)} 
    >
      {
        inputs.map((input, id) => { 
          const inputProps = { 
            id, 
            inputs, 
            setInputs, 
            spiritObject, 
            setSpiritObject, 
            ingredientsArray, 
            setIngredientsArray 
          }

          return (
            <div>
              <Grid container alignContent="center" alignItems="center">
                <MinusButton props={inputProps} />
                <TextField 
                  {...register('name')}
                  id={id}
                  label='Ingredient'
                  value={inputs[id].name}
                  variant='outlined'
                  margin='normal'
                  InputProps={{className: classes.input}}
                  onChange={(e) => onChangeInput(e)}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select 
                    {...register('type')}
                    defaultValue="" 
                    id="spiritType"
                    onChange={(e) => onChangeInput(e)}
                  >
                    <ListSubheader>Ingredient Type</ListSubheader>
                    {
                      types.map((type, id) => {
                        return <MenuItem key={id} value={type}>{type}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>
                <PlusButton props={inputProps} />
              </Grid>
              {
                // Pretty sure I'll need to use a Controller component from useForm here
                cocktail.recipe.unit === "metric" ? 
                  <div>
                    <Typography id="discrete-slider" gutterBottom>
                      Milliliters
                    </Typography>
                    <Slider
                      {...register('amount')}
                      id='amount'
                      defaultValue={15}
                      valueLabelDisplay="auto"
                      step={5}
                      min={5}
                      max={60}
                      marks
                    />
                  </div>
                : <div>
                    <Typography id="discrete-slider" gutterBottom>
                      Ounces
                    </Typography>
                    <Slider
                      {...register('amount')}
                      id='amount'
                      defaultValue={1}
                      valueLabelDisplay="auto"
                      step={0.25}
                      min={0.25}
                      max={6}
                      marks
                    />
                  </div>
              }
            </div>
          )
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
          Keep going
        </Button>
      </div>
    </form>
  );
}
