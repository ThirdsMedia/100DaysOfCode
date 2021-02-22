import React from 'react';
import MainBar from './MainBar';
import CardList from './CardList';
import {
  Container,
  Box,
  Grid
} from '@material-ui/core';

export default function ProductList() {
  return (
    <>
      <MainBar hasSearchInput />
        <Container component="main" maxWidth="lg">
          <Box mt={26}>
            <CardList />
          </Box>
        </Container>
    </>
  );
}

