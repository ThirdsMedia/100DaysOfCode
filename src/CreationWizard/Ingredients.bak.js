import React, { useState } from 'react';
import {
  Container,
  TextField,
  Grid,
  FormControl,
  FormControlLabel,
  Select,
  InputLabel,
  MenuItem,
  Switch,
  Checkbox,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    fontFamily: 'Nunito',
  },
  input: {
    width: 650,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

function MetricSelector() {
  return (
    <div>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={15}>15</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={25}>25</MenuItem>
      <MenuItem value={30}>30</MenuItem>
      <MenuItem value={35}>35</MenuItem>
      <MenuItem value={40}>40</MenuItem>
      <MenuItem value={45}>45</MenuItem>
      <MenuItem value={50}>50</MenuItem>
      <MenuItem value={55}>55</MenuItem>
      <MenuItem value={60}>60</MenuItem>
    </div>
  );
}

function ImperialSelector() {
  return (
    <div>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>1/4</MenuItem>
      <MenuItem value={20}>1/2</MenuItem>
      <MenuItem value={30}>3/4</MenuItem>
      <MenuItem value={30}>1</MenuItem>
      <MenuItem value={30}>1 1/4</MenuItem>
      <MenuItem value={30}>1 1/2</MenuItem>
      <MenuItem value={30}>1 3/4</MenuItem>
      <MenuItem value={30}>2</MenuItem>
      <MenuItem value={30}>2 1/4</MenuItem>
      <MenuItem value={30}>2 1/2</MenuItem>
    </div>
  );
}

export default function Ingredients() {
  const classes = useStyles();
  const [amount, setAmount] = useState("");
  const [isMetric, setIsMetric] = useState(false);

  const handleIsMetric = () => {
    setIsMetric(!isMetric)
  }

  return (
    <Container maxWidth="lg" className={classes.formContainer}>
      <FormControlLabel
        control={<Checkbox color="secondary" id="metric" size="small" />}
        label="Metric"
        onChange={handleIsMetric}
      />
      <Grid container>
        <Grid item xs>
          <TextField 
            id='ingredient'
            label='Ingredient'
            variant='outlined'
            margin='normal'
            InputProps={{
              className: classes.input
            }}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Amount</InputLabel>
            <Select
              id="amount"
              value={amount}
              //onChange={handleChange}
              label="Amount"
            >
            {
              isMetric
                ? <MetricSelector />
                : <ImperialSelector />
            }
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Unit</InputLabel>
            <Select
              id="unit"
              value={amount}
              //onChange={handleChange}
              label="Unit"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'oz'}>oz</MenuItem>
              <MenuItem value={'ml'}>ml</MenuItem>
              <MenuItem value={'tsp'}>tsp</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
