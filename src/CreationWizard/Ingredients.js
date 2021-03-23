import React, { useState } from 'react';
import MetricSelector from '../Components/MetricSelector';
import ImperialSelector from '../Components/ImperialSelector';
import spirits from '../static/spirits';
import {
  Container,
  TextField,
  IconButton,
  FormControl,
  Select,
  ListSubheader,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
}));

function IngredientInput() {
  const classes = useStyles();
  const [isUnitIngredient, setIsUnitIngredient] = useState(true);
  const unitTypes = ["Imperial", "Metric", "Unit"];
  const [unitType, setUnitType] = useState('Imperial');

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
          InputProps={{
            className: classes.input
          }}
        />
        {
          unitType === "Imperial" || unitType === "Metric"
            ? <FormControl variant="outlined" className={classes.formControl}>
                <Select defaultValue="" id="search-filter">
                  <ListSubheader>Spirit Type</ListSubheader>
                  {
                    spirits.map((spirit, id) => {
                      return <MenuItem value={spirit}>{spirit}</MenuItem>
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
              ? <MetricSelector />
              : unitType === "Imperial"
                  ? <ImperialSelector />
                  : false
          )
          : false
      }
    </div>
  );
}

export default function Ingredients() {
  const classes = useStyles();
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
    </Container>
  );
}
