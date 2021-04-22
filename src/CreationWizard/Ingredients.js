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
  const { id, inputs, setInputs } = props;

  const removeInput = (e, id) => {
    const input = [...inputs]
    // this may be the issue. It always removes the last item from the array, not the one with the specified ID
    input.splice(id, 1);
    setInputs(input);
  }

  return (
    <div>
      {
        inputs.length > 1 ?
        <IconButton
          id={id}
          name={`ingredient-${id}`}
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
  const { id, inputs, setInputs } = props;

  return (
    <div>
      {
      inputs.length === id+1 
        ? <IconButton
            color="primary"
            onClick={() => setInputs([...inputs, {}])}
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
  const [inputs, setInputs] = useState([{}]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

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
      onSubmit={handleSubmit((data) => onSubmit(data))} 
    >
      {
        inputs.map((input, id) => { 
          const inputProps = { id, inputs, setInputs }

          return (
            <div>
              <MinusButton props={inputProps} />
              <TextField 
                {...register(`ingredient${id}`)}
                id='ingredient'
                label='Ingredient'
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
              {
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
