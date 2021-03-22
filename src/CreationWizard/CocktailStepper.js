import React, { useState, useEffect } from 'react';
import BasicInfo from './BasicInfo';
import BaseSpirit from './BaseSpirit';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import {
  Collapse,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  nextButton: {
    borderRadius: 37,
  },
}));

// You may need to refer to this: https://stackoverflow.com/questions/61215349/material-ui-stepper-not-keeping-state-when-move-next-or-back
function RenderStep(step, handleNext) {
  const classes = useStyles();

  switch (step) {
    case 0:
      return (
        <div>
          <BasicInfo />
          <Button
            className={classes.nextButton}
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<ExpandMoreIcon />}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      )
    case 1:
      return (
        <div>
        <BaseSpirit />
          <Button
            className={classes.nextButton}
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<ExpandMoreIcon />}
            onClick={handleNext}
          >
            Continue
          </Button>
        </div>
      )
    case 2:
      return (
          <div>
          <Ingredients />
          <Button
            className={classes.nextButton}
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<ExpandMoreIcon />}
            onClick={handleNext}
          >
            Keep going
          </Button>
          </div>
      )
    case 3: 
      return (
        <div>
        <Instructions />
          <Button
          //  className={classes.nextButton}
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<ExpandMoreIcon />}
            onClick={handleNext}
          >
            Almost there
          </Button>
        </div>
      )
    default:
      return false
  }
}

export default function CocktailStepper({ steps, activeStep, handleNext, handleReview }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse appear in={checked} {
      ... checked ? { timeout: 1000 } : {}
    }>
      <Stepper activeStep={activeStep} orientation="vertical">
      {
        steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent id={`step-${activeStep}`}>
              <Typography>{RenderStep(index, handleNext)}</Typography>
            </StepContent>
          </Step>
        ))
      }
      </Stepper>
    </Collapse>
  )
}
