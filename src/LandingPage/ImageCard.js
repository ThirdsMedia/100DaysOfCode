import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Collapse,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    minWidth: 550,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  paragraph: {
    fontFamily: 'Nunito',
    fontsize: '1.1rem',
    color: '#ddd',
  },
});

// So here's how we get an animation to run upon scrolling
// WE don't want those to appear until we scroll
export default function ImageCard({ info, isAnimated}) {
  const classes = useStyles();

  // boom
  return (
    <Collapse appear in={isAnimated} {
      ... isAnimated ? { timeout: 1000 } : {}
    }>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={info.image}
            title="Navigate"
            href="/products"
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="h1" 
              className={classes.title}
            >
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.paragraph}>
              {info.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
  );
}
