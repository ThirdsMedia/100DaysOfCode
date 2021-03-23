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
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles(theme => ({
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

// You may need to refer to this: https://stackoverflow.com/questions/61215349/material-ui-stepper-not-keeping-state-when-move-next-or-back
function RenderStep(step, handleNext, activeStep) {
  const classes = useStyles();

  switch (step) {
    case 0:
      return (
        <div>
          <BasicInfo />
          <div className={classes.buttonDiv}>
            <Scroll to={`step-${activeStep}`} smooth="true">
              <Button
                className={classes.nextButton}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<ExpandMoreIcon />}
                onClick={handleNext}
              >
                Next
              </Button>
            </Scroll>
          </div>
        </div>
      )
    case 1:
      return (
        <div>
          <BaseSpirit />
          <div className={classes.buttonDiv}>
            <Scroll to={`step-${activeStep}`} smooth="true">
              <Button
                className={classes.nextButton}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<ExpandMoreIcon />}
                onClick={handleNext}
              >
                Continue
              </Button>
            </Scroll>
          </div>
        </div>
      )
    case 2:
      return (
        <div>
          <Ingredients />
          <div className={classes.buttonDiv}>
            <Scroll to={`step-${activeStep}`} smooth="true">
              <Button
                className={classes.nextButton}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<ExpandMoreIcon />}
                onClick={handleNext}
              >
                Keep going
              </Button>
            </Scroll>
          </div>
        </div>
      )
    case 3: 
      return (
        <div>
          <Instructions />
          <div className={classes.buttonDiv}>
            <Scroll to={`step-${activeStep}`} smooth="true">
              <Button
                className={classes.nextButton}
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<ExpandMoreIcon />}
                onClick={handleNext}
              >
                Almost there
              </Button>
            </Scroll>
          </div>
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
              <Typography>{RenderStep(index, handleNext, activeStep)}</Typography>
            </StepContent>
          </Step>
        ))
      }
      </Stepper>
    </Collapse>
  )
}
