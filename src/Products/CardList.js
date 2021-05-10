import React from 'react';
import {
  Container,
  Grid,
  Link,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const sizes = [150, 195, 240, 285];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
  },
  card: {
    background: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
    borderRadius: 16, 
    width: 220,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Nunito',
  },
}));

export default function CardList({ data }) {
  const classes = useStyles();

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={3} className={classes.root}>
      {
        data.map((card) => {
          return (
            <Grid key={card.id} item>
              <Link href={`/cocktail/${card.id}`}>
                <Card raised className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      style={{height: sizes[Math.floor(Math.random() * 4)]}}
                      image={card.picture}
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
                      <Grid container className={classes.content} justify='center'>
                        {
                          card.ingredients.map((item) => {
                            return (
                              <Typography 
                                key={item.id}
                                variant="body2" 
                                color="textSecondary" 
                                component="p" 
                              >
                                {item.name+", "}
                              </Typography>
                            );
                          })
                        }
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          )
        })
      }
      </Grid>
    </Container>
  );
}


