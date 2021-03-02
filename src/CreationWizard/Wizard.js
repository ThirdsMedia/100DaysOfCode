import React, { useState, useEffect } from 'react';
import MainBar from '../MainBar';
import BasicInfo from './BasicInfo';
import {
  Typography,
  Collapse,
  IconButton,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  info: {
    minHeight: '100vh',    
    textAlign: 'center',
  },
  appBar: {
    position: 'sticky',
    top: 0,    
    zIndex: 1,
  },
  createForm: {
    minHeight: '100vh',
  },
}));

function getSteps() {
  return ['Basic Information', 'Base Spirit', 'Ingredients', 'Instructions'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

export default function Create() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps()
  useEffect(() => {
    setChecked(true);
  });

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  return (
    <main className={classes.info}>
      <MainBar hasInfoIcon />
      <Collapse appear in={checked} {
        ... checked ? { timeout: 1000 } : {}
      }>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <BasicInfo />
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Collapse>
    </main>
  );
}
