import React from 'react';
import Search from './Search';
import UserMenu from './UserMenu';
import ThirdsMediaLogo from '../Components/ThirdsMediaLogo';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';

export default function MainBar() {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <ThirdsMediaLogo />
        <Search />
        <UserMenu /> 
      </Toolbar>
    </AppBar>
  );
}

