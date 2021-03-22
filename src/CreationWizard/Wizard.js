import React, { useState } from 'react';
import MainBar from '../Components/MainBar';
import InfoDrawer from './InfoDrawer';
import CocktailStepper from './CocktailStepper';
import Next from './Next';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.main,
    display: 'flex',
  },
  infoButton: {
    float: 'right',
    textAlign: 'flex-end',
  },
  button: {
    borderRadius: 37,
    width: 250
  },
  buttonDiv: {
    flex: 1,
    margin: 25,
    textAlign: 'center',
  },
}));

/*
 * Notes:
 *  - git branch day36 if you want to see the version where you could pick your recipe type. 
 *  - Removed that feature because it's WAY too much code and there must be a simpler way
 */

export default function Wizard() {
  const classes = useStyles();
  const steps = ['Basic Information', 'Base Spirit', 'Ingredients', 'Instructions'];
  const [activeStep, setActiveStep] = useState(0);
  const [readyForReview, setReadyForReview] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  /*
   * This should also be pushing the entered data into the object
   * This could get complicated. I'll need to give each input a unique ID so that if I backtrack I can have it update
   * The unique item you'd want to change otherwise stuff could get messy
   */
  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  const handleReview = () => {
    setReadyForReview(true)
  }

  return (
    <main>
      <MainBar />
      <AppBar 
        position='sticky' 
        elevation={0} 
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton disabled={activeStep === 0} onClick={handleBack}>
            <ExpandLessIcon />
          </IconButton>
          <Next
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleReview={handleReview}
           />
          {
            /* If you're at the end of your stepper then stop showing the help icon */
            activeStep <= steps.length - 1
              ? <IconButton className={classes.infoButton} onClick={handleDrawer}>
                  <InfoOutlinedIcon />
                </IconButton>
              : false
          }
        </Toolbar>
      </AppBar>
      <div>
        <InfoDrawer 
          step={activeStep} 
          stepTitle={steps[activeStep]}
          isOpen={isOpen}
          handleDrawer={handleDrawer}
        /> 
        <CocktailStepper 
          steps={steps} 
          activeStep={activeStep} 
          handleNext={handleNext}
        />
      </div>
      <div className={classes.buttonDiv}>
      {
        /* Once all steps are completed then display the Review button */
        activeStep === steps.length
          ? <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              href="/review"
              onClick={() => console.log("Went to next")}
            >
              Review
            </Button>
          : false
      }
      </div>
    </main>
  );
}

