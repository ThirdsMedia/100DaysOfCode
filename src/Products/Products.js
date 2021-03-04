import React from 'react';
import MainBar from '../Helpers/MainBar';
import CardList from './CardList';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.primary.background,
    zIndex: 1,
    marginBottom: 15,
    textAlign: 'center',
  },
  searchBox: {
    margin: 20,
    borderRadius: 50,
    width: 700,
  },
}));

export default function Products({ data }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBar}>
        <MainBar />
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
      </div>
      <CardList data={data} />
    </div>
  );
}

