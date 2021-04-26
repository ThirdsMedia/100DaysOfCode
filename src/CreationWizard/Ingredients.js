import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
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

function InputField({ id, inputs, onClick }) {
  const classes = useStyles();

  return (
    <div> 
      {
        inputs.length > 1 ?
          <IconButton
            id={id}
            color="primary"
            onClick={onClick}
          >
            <RemoveIcon fontSize="large"/>
          </IconButton>
        : false
      }
      <TextField 
//        {...register('name')}
        id={id}
        label='Ingredient'
        variant='outlined'
        margin='normal'
        InputProps={{className: classes.input}}
 //       onChange={(e) => onChangeInput(e)}
      />
    </div>
  );
}
  
export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const { register, handleSubmit, control } = useForm();
  const [spiritObject, setSpiritObject] = useState({});
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [inputs, setInputs] = useState([{}]);

  // This works yo!
  console.log("From ingredients: ", ingredientsArray)

  const handleRemoveInput = (id) => {
    console.log("remove input: ", id)
    console.log(inputs.findIndex((input) => input.id === id))
    setInputs(inputs.filter((input) => input.id !== id));
  }

  const handleAddInput = () => {
    setInputs([...inputs, { id: uuidv4() }])
//    setIngredientsArray([...ingredientsArray, inputs[id]])
//    setInputs([...inputs, {}])
//    setSpiritObject({})
  }

  // Success. Now get the Slider working too, and add an id field to spiritOject
  const onSubmit = () => {
    cocktail.addIngredients(ingredientsArray)
  }

  // Now just need to get this working and then make onSubmit add the ingredientsArray to the cocktail object
  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const onChangeInput = (e) => {
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
      {inputs.map((input, id) => { 
        console.log(id, inputs.length)
        return (
          <div>
            <InputField key={id} id={id} inputs={inputs} onClick={() => handleRemoveInput(id)} />
            {
              inputs.length === id+1 ? 
                <IconButton
                  color="primary"
                  onClick={() => handleAddInput()}
                >
                  <AddBoxIcon fontSize="large"/>
                </IconButton>
              : false
            }
              {
                // Pretty sure I'll need to use a Controller component from useForm here
                cocktail.recipe.unit === "metric" ? 
                  <div>
                    <Typography id="discrete-slider" gutterBottom>
                      Milliliters
                    </Typography>
                    <Controller
                      name='slider'
                      control={control}
//                      defaultValue={[0,60]}
                      render={({ field }) => (
                      <Slider {...field}
                      defaultValue={15}
                      onChange={(value) => console.log(value)}
                      valueLabelDisplay="auto"
                      step={5}
                      min={5}
                      max={60}
                      marks
                      />
                      )}
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
