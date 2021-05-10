import React, { useState } from 'react';
import AppDrawer from './AppDrawer';
import Search from './Search';
import UserMenu from './UserMenu';
import ThirdsMediaLogo from '../Components/ThirdsMediaLogo';
import {
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

export default function MainBar() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <ThirdsMediaLogo />
        <IconButton onClick={onOpenDrawer}>
          <SortIcon style={{color: 'white'}}/>
        </IconButton>
        <Search />
        <AppDrawer isOpen={isOpen} handleDrawer={onOpenDrawer} />
        <UserMenu /> 
      </Toolbar>
    </AppBar>
  );
}

