import React from 'react';
import MainBar from './MainBar';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

/* Material UI Icons */
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(6),
  },
  searchBox: {
    marginTop: 10,
    borderRadius: 50,
    width: 700,
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="lg">
      <MainBar />
      <Box component="body" mt={4}>
        <Typography component="h1" variant="h5" align="center">
          Search
        </Typography>
        <TextField 
          id="search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />              
              </InputAdornment>
            ),
            className: classes.searchBox
          }}
        />
      </Box>
        {
          /*
          * Eventually, this will most likely become multiple cards in some sort of grid. 
          * I'm sure I'd be moving this grid into a separate file to become the Card list of sorts. 
          */
        }
      <Card variant="outlined">
        <CardContent>
          Stuff
        </CardContent>
      </Card>
    </Container>
  );
}
