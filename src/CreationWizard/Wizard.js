import React, { useState } from 'react';
import MainBar from '../Components/MainBar';
import InfoDrawer from './InfoDrawer';
import CocktailStepper from './CocktailStepper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link as Scroll } from 'react-scroll';
import { useCocktail, CocktailProvider } from '../Providers/CocktailProvider';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
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

  const handleDrawer = () => setIsOpen(!isOpen)

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
          <Scroll to={`step-${cocktail.activeStep}`} smooth="true">
            <IconButton
              variant="contained"
              color="primary"
              onClick={cocktail.handleNext}
            >
            {
              cocktail.activeStep > cocktail.steps.length - 1
                ? <CheckCircleIcon />
                : <ExpandMoreIcon />
            }
            </IconButton>
          </Scroll>
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
        <CocktailStepper />
      </div>
      <div className={classes.buttonDiv}>
      {
        /* Once all steps are completed then display the Review button */
        cocktail.activeStep === cocktail.steps.length
          ? <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={() => console.log("Teh Cocktail: ", cocktail.recipe)}
            >
              Review
            </Button>
          : false
      }
      </div>
    </main>
  );
}

