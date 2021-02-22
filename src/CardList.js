import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container
} from '@material-ui/core';
import imageUrl from './assets/logo192.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 'center',
    justifyContent: 'center',
  },
}));

export default function CardList({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
    {
      data.map((card) => {
        return (
          <Grid item>
            <Card raised style={{
              borderRadius: 10, 
              width: 250, 
              height: 250, 
              textAlign: 'center'
            }}>
            <CardActionArea>
              <CardMedia
                style={{height: 205}}
                image={imageUrl}
                title="MoonBoots"
                />
                <CardContent className={classes.text}>
                  {card.name}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      })
    }
    </Grid>
  );
}
