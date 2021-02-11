import React from 'react';
import MainBar from './MainBar';
import Header from './Header';
import CardList from './CardList';
import exampleDatabase from './exampleDatabase';

/* Material UI Core */
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    margin: 20,
    borderRadius: 50,
    width: 700,
  },
  logo: {
    marginTop: theme.spacing(3),
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="lg">
      <MainBar />
      <Header />
      <Box component="body" mt={4}>
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
      <CardList data={exampleDatabase} />    
    </Container>
  );
}
