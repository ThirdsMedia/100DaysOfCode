import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function MainBar() {
  return (
    <AppBar style={{background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <IconButton edge="start" color="primary">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
