import React, { useState } from 'react';
import MainBar from '../Components/MainBar';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6),
    textAlign: 'center'
  },
  textField: {
    borderRadius: 37,
  },
  submitButton: {
    color: 'white',
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const steps = ["Enter your email", "Reset password", "Enter code"];

function renderStep(step, props) {
  switch(step) {
    case 0:
      return <EnterEmail props={props} />
    case 1:
      return <TextCode props={props} />
    case 2:
      return <Verify props={props} />
    default:
      return false
  }
}

function EnterEmail({ props }) {
  const classes = useStyles();

  /*
   * This would pull data from a database based on the email passed to the form
   * If it doesn't exist, render red error text instead
   */

  return (
    <Container className={classes.root} component="main" maxWidth="sm">
      <Typography variant="subtitle2" color="textSecondary">
        Enter the email associated with your account.
      </Typography>
      <TextField
        id="email"
        label="Email"
        margin="normal"
        required
        fullWidth
        variant="outlined"
        InputProps={{
          className: classes.textField
        }}
      />
      <Button 
        className={classes.submitButton}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        onClick={props}
      >
        Search
      </Button>
    </Container>
  );
}

function TextCode({ props }) {
  const classes = useStyles();
  const [value, setValue] = useState('phone');

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  /*
   * this component would need to pull user data from database using the email previously passed
   * and then send a randomly generated code to either the phone (via text, or the email)
   * But for starters, it could just be email
   */

  return (
    <Container maxWidth="sm">
      <Grid justify='center' alignItems='center' container spacing='3'>
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            How would you like to receive your code?
          </Typography>
        </Grid>
        <Grid item>
          <FormControl component="fieldset">
            <RadioGroup aria-label="method" name="method" value={value} onChange={handleChange}>
              <FormControlLabel value="phone" control={<Radio />} label="Phone number" />
              <FormControlLabel value="email" control={<Radio />} label="Email" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Button 
        className={classes.submitButton}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        onClick={props}
      >
        Next
      </Button>
    </Container>
  );
}

function Verify({ props }) {
  const classes = useStyles();

  /* 
   * Add logic to render red error text if the code was wrong
   * Or go to next if correct
   */

  return (
    <Container className={classes.root} component="main" maxWidth="sm">
      <Typography variant="subtitle2" color="textSecondary">
        Enter the code you received
      </Typography>
      <TextField
        id="code"
        label="Code"
        margin="normal"
        required
        fullWidth
        variant="outlined"
        InputProps={{
          className: classes.textField
        }}
      />
      <Button 
        className={classes.submitButton}
        type="submit"
        color="primary"
        fullWidth
        variant="contained"
        onClick={props}
      >
        Submit
      </Button>
    </Container>
  );
}

export default function ForgotPassword() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  return (
    <div>
      <MainBar />
      <Stepper activeStep={activeStep} orientation="vertical">
        {
          steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{renderStep(index, handleNext)}</Typography>
              </StepContent>
            </Step>
          ))
        }
      </Stepper>
    </div>
  );
}
