import React, { useState }from 'react';
import { useCocktail } from '../Providers/CocktailProvider';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Divider,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  info: {
    minHeight: '100vh',
  },
  infoBox: {
    border: 'solid 1px #202020',
    borderRadius: 40,
    minHeight: '40vh',
    padding: 20,
    margin: 20,
  },
  scrollButton: {
    fontSize: '4em',
  },
  appBar: {
    display: 'flex',
    backgroundColor: theme.palette.primary.background,
  },
  title: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    margin: 20,
  },
  divider: {
    margin: 10
  },
  button: {
    borderRadius: 37,
    width: 450,
  },
  buttonDiv: {
    flex: 1,
    textAlign: 'center',
    margin: 25,
  },
}));

export default function Review() {
  const classes = useStyles();
  const cocktail = useCocktail();
  const history = useHistory();
  const [error, setError] = useState(null);

  const onSubmitCocktail = () => {
    cocktail.submitToFirestore()
    history.push(
      "/message",
      {message: "Thanks for submitting! We will review your cocktail shortly", nav: "/home"},
    );
  }

  return (
    <main>
      <div className={classes.header} id='drink-image'>
        <Avatar src={cocktail.recipe.picture} />
      </div>
      <div id="drink-info" className={classes.info}>
        <AppBar position='sticky' className={classes.appBar}>
          <Toolbar>
            <Scroll to='drink-image' smooth='true'>
              <IconButton>
                <ExpandLessIcon />
              </IconButton>
            </Scroll>
          </Toolbar>
        </AppBar>
        <Container style={{textAlign: 'center'}}>
          <Typography component="h1" variant="h2" className={classes.title}>
            {cocktail.recipe.name}
          </Typography>
          <Typography color="textSecondary">
            {cocktail.recipe.creator}, {cocktail.recipe.location}, {cocktail.recipe.date}
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Typography color="textSecondary">
            {cocktail.recipe.description}
          </Typography>
        </Container>
        <Box className={classes.infoBox} boxShadow={5}>
          {
            cocktail.recipe.ingredients.map((ingredient) => {
              return (
                <Typography key={cocktail.recipe.id}>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </Typography>
              );
            })
          }
          <Divider variant="middle" className={classes.divider} />
          <Typography>{cocktail.recipe.instructions}</Typography>
        </Box>
        { error ? <span className={classes.error}>{error}</span> : false }
        <div className={classes.buttonDiv}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              cocktail.setActiveStep(0);
              cocktail.setIsReadyForReview(false)
            }}
          >
            Edit 
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onSubmitCocktail}
          >
            Publish
          </Button>
        </div>
      </div>
    </main>
  );
}
