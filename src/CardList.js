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
import cocktailImage from './assets/cocktail.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10, 
    width: 250, 
    height: 250, 
    textAlign: 'center',
  },
  cardMedia: {
    height: 205,
  },
  cardText: {
    backgroundColor: 'rgba (0,0,0,0.5)',
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
            <Card raised className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={cocktailImage}
                title="MoonBoots"
                />
                <CardContent className={classes.cardText}>
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
