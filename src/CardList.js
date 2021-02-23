import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import cocktailImage from './assets/cocktail.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: 'center',
    justifyContent: 'center',
  },
  card: {
    background: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
    borderRadius: 10, 
    minWidth: 320,
    maxWidth: 345,
  },
  cardMedia: {
    height: 210,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
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
          <Grid key={card.id} item>
            <Card raised className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={cocktailImage}
                  title="MoonBoots"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <div className={classes.content}>
                  {
                    card.ingredients.map((item) => {
                      return (
                        <Typography variant="body2" color="textSecondary" component="p" style={{margin: 2}}>
                          {item.name}{' '}
                        </Typography>
                      );
                    })
                  }
                  </div>
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
