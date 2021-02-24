import React from 'react';
import {
  Container,
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
  text: {
    fontFamily: 'Nunito',
  },
}));

export default function CardList({ data }) {
  const classes = useStyles();
  console.log(process.env.PUBLIC_URL + '/assets/')

  return (
    <Container>
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
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      className={classes.text}
                    >
                      {card.name}
                    </Typography>
                    <div className={classes.content}>
                    {
                      card.ingredients.map((item) => {
                        return (
                          <Typography 
                            key={item.id}
                            variant="body2" 
                            color="textSecondary" 
                            component="p" 
                          >
                            {item.name}
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
    </Container>
  );
}
