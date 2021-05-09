import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Divider,
} from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  info: {
    minHeight: '100vh',
  },
  infoBox: {
    border: 'solid 1px #202020',
    borderRadius: 40,
    minHeight: '40vh',
    padding: 20,
    margin: 20,
  },
  scrollButton: {
    fontSize: '4em',
  },
  appBar: {
    display: 'flex',
    backgroundColor: theme.palette.primary.background,
  },
  title: {
    fontFamily: 'Nunito',
    textAlign: 'center',
    margin: 20,
  },
  divider: {
    margin: 10
  },
  button: {
    borderRadius: 37,
    width: 450,
  },
  buttonDiv: {
    flex: 1,
    textAlign: 'center',
    margin: 25,
  },
}));

export default function Review() {
  const classes = useStyles();
  const location = useLocation();
//  const [isPictureSelected, setIsPictureSelected] = useState(false);
//  const [imagePath, setImagePath] = useState('');

  //const handlePictureSelect = () => setIsPictureSelected(true)

  return (
    <div>
      <div className={classes.header} id='drink-image'>
        <Avatar src={location.data.picture} />
      </div>
      <div id="drink-info" className={classes.info}>
        <AppBar position='sticky' className={classes.appBar}>
          <Toolbar>
            <Scroll to='drink-image' smooth='true'>
              <IconButton>
                <ExpandLessIcon />
              </IconButton>
            </Scroll>
          </Toolbar>
        </AppBar>
        <Container style={{textAlign: 'center'}}>
          <Typography component="h1" variant="h2" className={classes.title}>
            {location.data.name}
          </Typography>
          <Typography color="textSecondary">
            {location.data.creator}, {location.data.location}, {location.data.date}
          </Typography>
          <Divider variant="middle" className={classes.divider} />
          <Typography color="textSecondary">
            {location.data.description}
          </Typography>
        </Container>
        <Box className={classes.infoBox} boxShadow={5}>
          {
            location.data.ingredients.map((ingredient) => {
              return <Typography>{ingredient.amount} {ingredient.unit} {ingredient.name}</Typography>
            })
          }
          {/*
            location.data.miscellaneous.map((item) => {
              return <Typography>{item}</Typography>
            })
            */
          }
          <Divider variant="middle" className={classes.divider} />
          <Typography>{location.data.instructions}</Typography>
        </Box>
        <div className={classes.buttonDiv}>
          <Button
//            className={classes.button}
            variant="outlined"
            color="primary"
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
