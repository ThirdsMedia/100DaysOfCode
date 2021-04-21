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
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
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
  },
  nextButton: {
    borderRadius: 37,
    textTransform: 'none',
    margin: 10,
    fontFamily: 'Nunito',
  },
}));

const spirits = [
  "Bourbon",
  "Whiskey",
  "Scotch",
  "Brandy",
  "Cognac",
  "Rum",
  "Tequila",
  "Gin",
  "Vodka",
  "Absinthe",
  "Vermouth",
];
  
function IngredientInput({ ingredientNumber, newInput, unitType }) {
  const classes = useStyles();
  const [isUnitIngredient, setIsUnitIngredient] = useState(true);
  const [spiritObject, setSpiritObject] = useState({});

  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const onChangeInput = (e) => {
    setSpiritObject({...spiritObject, [e.target.name]: e.target.value})
  }

  const handleIsUnitIngredient = () => {
    setIsUnitIngredient(!isUnitIngredient)
  }

  console.log("From IngredientInput: ", ingredientNumber, newInput)
  console.log(spiritObject)

  return (
    <div>
      <Grid container alignContent='center' alignItems='center'>
        {/* This is where you enter the spirit name */}
        <Grid item xs>
          <TextField 
            id='ingredient'
            label='Ingredient'
            name='name'
            variant='outlined'
            margin='normal'
            InputProps={{className: classes.input}}
            onChange={(e) => onChangeInput(e)}
          />
        </Grid>
        <Grid item xs>
          {
            // Select the spirit type here 
            unitType === "imperial" || unitType === "metric"
              ? <FormControl variant="outlined" className={classes.formControl}>
                  <Select 
                    defaultValue="" 
                    name='type' 
                    id="spiritType"
                    onChange={(e) => onChangeInput(e)}
                  >
                    <ListSubheader>Spirit Type</ListSubheader>
                    {
                      spirits.map((spirit, id) => {
                        return <MenuItem key={id} value={spirit}>{spirit}</MenuItem>
                      })
                    }
                  </Select>
                </FormControl>
              : false
          }
        </Grid>
        <Grid item xs>
          <Button
            className={classes.submitButton}
            type="submit"
            color="primary"
            variant="contained"
          //  onClick={cocktail.handleNext}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {
        // This is the slider
        isUnitIngredient 
          ? (
            unitType === "metric"
              ? (
                <div>
                  <Typography id="discrete-slider" gutterBottom>
                    Milliliters
                  </Typography>
                  <Slider
                    id="baseSpiritAmount"
                    name="metricAmount"
                    defaultValue={15}
                    valueLabelDisplay="auto"
                    step={5}
                    min={5}
                    max={60}
                    marks
                    onChange={onChangeSlider("amount")}
                  />
                </div>
              ) : unitType === "imperial"
                  ? (
                    <div>
                      <Typography id="discrete-slider" gutterBottom>
                        Ounces
                      </Typography>
                      <Slider
                        id='baseSpiritAmount'
                        name='amount'
                        defaultValue={1}
                        valueLabelDisplay="auto"
                        step={0.25}
                        min={0.25}
                        max={6}
                        marks
                        onChange={onChangeSlider("amount")}
                      />
                    </div>
                  ) : false
          ) : false
      }
    </div>
  );
}

export default function Ingredients() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const newInput = {}
  const [inputs, setInputs] = useState([{...newInput}]);
  const [unitType, setUnitType] = useState('imperial');

  const addNewInput = () => {
    setInputs([...inputs, {...newInput}])
  }

  const handleUnitType = (e) => {
    setUnitType(e.target.value)
  }

  return (
    <div className={classes.formContainer}>
      <Grid container alignItems='center'>
        <Grid item xs>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>Unit Type</FormLabel>
            <RadioGroup row aria-label='unitType' name='unit' value={unitType} onChange={handleUnitType}>
              <FormControlLabel value='imperial' control={<Radio />} label='Imperial' />
              <FormControlLabel value='metric' control={<Radio />} label='Metric' />
              <FormControlLabel value='unit' control={<Radio />} label='Unit' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item>
          <IconButton onClick={addNewInput} color="primary">
            <AddBoxIcon fontSize="large"/>
          </IconButton>
        </Grid>
      </Grid>
      {
        inputs.map((input, id) => { 
          return (
            <IngredientInput 
              key={`ingredient-${id}`} 
              ingredientNumber={id} 
              newInput={input} 
              setInput={setInputs} 
              unitType={unitType}
            />
          )
        })
      }
      <div className={classes.buttonDiv}>
        <Scroll to={`step-${cocktail.activeStep}`} smooth="true">
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
        </Scroll>
      </div>
    </div>
  );
}
