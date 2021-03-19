import React, { useState } from 'react';
import MainBar from '../Components/MainBar';
import CardList from './CardList';
import spirits from '../static/spirits';
import {
  TextField,
  Grid,
  FormControl,
  ListSubheader,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from '@material-ui/core';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Products({ data }) {
  const classes = useStyles();
  const [filter, setFilter] = useState('name');

  const handleChange = (event) => {
    setFilter(event.target.value) 
  }

  return (
    <div>
      <div className={classes.appBar}>
        <MainBar />
        <Grid container alignItems='center' justify='center'>
          <Grid item>
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
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="search-filter">Filter by</InputLabel>
              <Select defaultValue="" id="search-filter">
                <MenuItem value={'name'}>Cocktail Name</MenuItem>
                <MenuItem value={'creator'}>Cocktail Creator</MenuItem>
                <ListSubheader>Base Spirit'</ListSubheader>
                {
                  spirits.map((spirit, id) => {
                    return <MenuItem value={spirit}>{spirit}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <CardList data={data} />
    </div>
  );
}

