import React, { useState } from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
//import MetricSelector from './MetricSelector';
//import ImperialSelector from './ImperialSelector';
import spirits from '../static/spirits';
import {
  Container,
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

function IngredientInput() {
  const classes = useStyles();
  const [isUnitIngredient, setIsUnitIngredient] = useState(true);
  const [unitType, setUnitType] = useState('Imperial');
  const [spiritObject, setSpiritObject] = useState({});

  const onChangeSlider = name => (event, newValue) => {
    setSpiritObject({...spiritObject, [name]: newValue})
  }

  const handleIsUnitIngredient = () => {
    setIsUnitIngredient(!isUnitIngredient)
  }

  const handleUnitType = (event) => {
    setUnitType(event.target.value)
  }

  return (
    <div>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select 
            defaultValue="Spirit" 
            id="ingredient-type"
            value={unitType}
            onChange={handleUnitType}
          >
            <MenuItem value="Imperial">Imperial</MenuItem>
            <MenuItem value="Metric">Metric</MenuItem>
            <MenuItem value="Unit">Unit</MenuItem>
          </Select>
        </FormControl>
        <TextField 
          id='ingredient'
          label='Ingredient'
          variant='outlined'
          margin='normal'
          InputProps={{className: classes.input}}
        />
        {
          unitType === "Imperial" || unitType === "Metric"
            ? <FormControl variant="outlined" className={classes.formControl}>
                <Select defaultValue="" id="search-filter">
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
      </div>
      {
        isUnitIngredient 
          ? (
            unitType === "Metric"
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
              ) : unitType === "Imperial"
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
  const newInput = {
    'amount': '',
    'name': '',
    'unit': '',
  };
  const [inputs, setInputs] = useState([{...newInput}]);

  const addNewInput = () => {
    setInputs([...inputs, {...newInput}])
    console.log(window.pageYOffset)
  }

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      {
        inputs.map((input, id) => { 
          return <IngredientInput key={`ingredient-${id}`} />
        })
      }
      <div className={classes.nextItem}>
        <IconButton onClick={addNewInput} color="primary">
          <AddBoxIcon fontSize="large"/>
        </IconButton>
      </div>
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
    </Container>
  );
}
