import React, { useState, useEffect } from 'react';
import MainBar from '../Components/MainBar';
import InfoDrawer from './InfoDrawer';
import BasicInfo from './BasicInfo';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import { useCocktail, CocktailProvider } from '../Providers/CocktailProvider';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Collapse,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from '@material-ui/core';
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

function RenderStep(step) {
  switch (step) {
    case 0:
      return <BasicInfo />
    case 1:
      return <Ingredients />
    case 2: 
      return <Instructions />
    default:
      return false
  }
}

export default function Wizard() {
  return (
    <CocktailProvider>
      <Create />
    </CocktailProvider>
  );
}

function Create() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => setChecked(true), []);

  const handleDrawer = () => setIsOpen(!isOpen)

  const onSubmitForm = () => {
console.log("Teh cocktail: ", cocktail.recipe);
  }

  return (
    <main>
      <MainBar noLogo />
      <AppBar 
        position='sticky' 
        elevation={0} 
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton disabled={cocktail.activeStep === 0} onClick={cocktail.handleBack}>
            <ExpandLessIcon />
          </IconButton>
          {
            /* If you're at the end of your stepper then stop showing the help icon */
            cocktail.activeStep <= cocktail.steps.length - 1
              ? <IconButton className={classes.infoButton} onClick={handleDrawer}>
                  <InfoOutlinedIcon />
                </IconButton>
              : false
          }
        </Toolbar>
      </AppBar>
      <div>
        <InfoDrawer 
          step={cocktail.activeStep} 
          stepTitle={cocktail.steps[cocktail.activeStep]}
          isOpen={isOpen}
          handleDrawer={handleDrawer}
        /> 
        <Collapse appear in={checked} {
          ... checked ? { timeout: 1000 } : {}
        }>
          <Stepper activeStep={cocktail.activeStep} orientation="vertical">
          {
            cocktail.steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent id={`step-${cocktail.activeStep}`}>
                  <Typography component='span'>
                    {RenderStep(index)}
                  </Typography>
                </StepContent>
              </Step>
            ))
          }
          </Stepper>
        </Collapse>
      </div>
      <div className={classes.buttonDiv}>
      {
        /* Once all steps are completed then display the Review button */
        cocktail.activeStep === cocktail.steps.length
          ? <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={cocktail.handleSubmit(onSubmitForm)}
            >
              Review
            </Button>
          : false
      }
      </div>
    </main>
  );
}

