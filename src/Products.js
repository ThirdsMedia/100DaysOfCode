import React from 'react';
import MainBar from './MainBar';
import Search from './Search';
import CardList from './CardList';
import {
  Container,
  Grid
} from '@material-ui/core';
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
}));

export default function Products({ data }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBar}>
        <MainBar hasLogo />
        <Search />
      </div>
      <CardList data={data} />
    </div>
  );
}

