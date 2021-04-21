import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import {
  Grid,
  TextField,
  IconButton,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Select,
  ListSubheader,
  MenuItem,
  Button,
  Typography,
  Slider,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddBoxIcon from '@material-ui/icons/AddBox';

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

const types = [
  "baseSpirit",
  "modifier",
  "nonAlcoholic",
  "misc",
];
  
export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const [spiritObject, setSpiritObject] = useState({});
  const [inputs, setInputs] = useState([{
    amount: '',
    name: '',
    type: '',
  }]);
  const [unitType, setUnitType] = useState('imperial');
  const ingredients = [{
    id: 0,
    ingredient: {},
  }];

  const addNewInput = () => setInputs([...inputs, {}])

  const handleUnitType = (e) => setUnitType(e.target.value)

  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const onChangeInput = (e) => {
    setSpiritObject({...spiritObject, [e.target.name]: e.target.value})
  }

  const onAddIngredientsToArray = () => {
    ingredients.push(spiritObject)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    console.log("Onsubmitform: ", event.target.getAttribute("name"), event.target.getAttribute("value"))
  }

  return (
    <form 
      noValidate 
      className={classes.formContainer}
      id='ingredients'
      name='ingredients'
      value={ingredients}
      onSubmit={onSubmitForm} 
    >
      <Grid container alignItems='center'>
        <Grid item xs>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>Unit Type</FormLabel>
            <RadioGroup row aria-label='unitType' name='unit' value={unitType} onChange={handleUnitType}>
              <FormControlLabel value='imperial' control={<Radio />} label='Imperial' />
              <FormControlLabel value='metric' control={<Radio />} label='Metric' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <IconButton onClick={addNewInput} color="primary">
            <AddBoxIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      {
        inputs.map((input, id) => { 
          return (
            <div>
              <TextField 
                id='ingredient'
                label='Ingredient'
                name='name'
         //       value={ingredients[id].name}
                variant='outlined'
                margin='normal'
                InputProps={{className: classes.input}}
                onChange={(e) => onChangeInput(e)}
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <Select 
                  defaultValue="" 
                  name='type' 
                  id="spiritType"
                  onChange={(e) => onChangeInput(e)}
                >
                  <ListSubheader>Spirit Type</ListSubheader>
                  {
                    types.map((type, id) => {
                      return <MenuItem key={id} value={type}>{type}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
              <Button
                className={classes.submitButton}
                color="primary"
                variant="contained"
                onClick={onAddIngredientsToArray}
              >
                Submit
              </Button>
              {
                unitType === "metric" ? 
                  <div>
                    <Typography id="discrete-slider" gutterBottom>
                      Milliliters
                    </Typography>
                    <Slider
                      id="baseSpiritAmount"
                      name="metricAmount"
          //            value={ingredients[id].amount}
                      defaultValue={15}
                      valueLabelDisplay="auto"
                      step={5}
                      min={5}
                      max={60}
                      marks
                      onChange={onChangeSlider("amount")}
                    />
                  </div>
                : <div>
                    <Typography id="discrete-slider" gutterBottom>
                      Ounces
                    </Typography>
                    <Slider
                      id='baseSpiritAmount'
                      name='amount'
           //           value={ingredients[id].amount}
                      defaultValue={1}
                      valueLabelDisplay="auto"
                      step={0.25}
                      min={0.25}
                      max={6}
                      marks
                      onChange={onChangeSlider("amount")}
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
          variant="contained"
          endIcon={<ExpandMoreIcon />}
          onClick={cocktail.handleNext}
        >
          Keep going
        </Button>
      </div>
    </form>
  );
}
