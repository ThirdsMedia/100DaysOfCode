import React, { useState } from 'react';
import { useAuth } from '../FirebaseAuthProvider';
import {
  Container,
  Typography,
  TextField,
  IconButton,
  Button,
  Link,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  step: {
    marginTop: theme.spacing(6),
    textAlign: 'center'
  },
  textField: {
    borderRadius: 37,
  },
  submitButton: {
    color: 'white',
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    borderRadius: 50,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  message: {
    fontFamily: 'Nunito',
  },
}))

export default function ForgotPassword() {
  const classes = useStyles();
  const auth = useAuth();
  const steps = [
    "Enter email", 
    "Choose verification method", 
    "Enter verification code", 
    "Reset password"
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [verifyMethod, setVerifyMethod] = useState('email');
  const [verified, setVerified] = useState(false);
  const [password, setPassword] = useState('test');
  const [passwordReset, setPasswordReset] = useState(false);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } 
  }

  const handleVerifyMethod = (event) => {
    setVerifyMethod(event.target.value)
    auth.sendPasswordResetEmail(email)
  }

  const handleVerificationCode = (event) => {
    setCode(event.target.value)
  }

  const searchForUserEmail = () => {
    // perform lookup in database, if found then do these next two things..
    setIsEmailValid(true)
    handleNext()
  }

  const handleSetVerify = () => {
    auth.confirmPasswordReset(code, password)
    setVerified(true)
    handleNext()
  }

  const handlePasswordReset = () => {
    setPasswordReset(true)
    handleNext()
  }

  return (
    <main>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Enter your email</StepLabel>
          <StepContent>
            <Container className={classes.step} maxWidth="sm">
              <Typography variant="subtitle2" color="textSecondary">
                Enter the email associated with your account
              </Typography>
              <TextField
                id="email"
                label="Email"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                onInput={ e => setEmail(e.target.value)}
                InputProps={{
                  className: classes.textField
                }}
              />
              <IconButton 
                className={classes.submitButton}
                type="submit"
                color="primary"
                fullWidth
                disabled={ !email ? true : false }
                variant="contained"
                onClick={searchForUserEmail}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Container>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Send verification code</StepLabel>
          <StepContent>
            <Container maxWidth="sm">
              <Grid justify='center' alignItems='center' container spacing='3'>
                <Grid item>
                  <Typography variant="subtitle2" color="textSecondary">
                    How would you like to receive your code?
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <RadioGroup aria-label="method" name="method" value={verifyMethod} onChange={handleVerifyMethod}>
                      <FormControlLabel value="phone" control={<Radio />} label="Phone number" />
                      <FormControlLabel value="email" control={<Radio />} label="Email" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <div style={{textAlign: 'center'}}>
              <IconButton 
                className={classes.submitButton}
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                onClick={handleNext}
              >
                <ExpandMoreIcon onClick={handleSetVerify} />
              </IconButton>
              </div>
            </Container>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Enter code</StepLabel>
          <StepContent>
            <Container className={classes.step} maxWidth="sm">
              <Typography variant="subtitle2" color="textSecondary">
                Enter the code you received
              </Typography>
              <TextField
                id="code"
                label="Code"
                margin="normal"
                required
                fullWidth
                variant="outlined"
                onInput={ e => setCode(e.target.value) }
                InputProps={{
                  className: classes.textField
                }}
              />
              <IconButton 
                className={classes.submitButton}
                type="submit"
                color="primary"
                fullWidth
                disabled={ !code ? true : false }
                variant="contained"
                onClick={handleSetVerify}
              >
                <ExpandMoreIcon />
              </IconButton>
            </Container>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Reset password</StepLabel>
          <StepContent>
            <Container className={classes.step} maxWidth="sm">
              <Typography variant="subtitle2" color="textSecondary">
                Enter a new password
              </Typography>
              <TextField
                id="password"
                label="New Password"
                margin="normal"
                required
                fullWidth
                type="password"
                variant="outlined"
                InputProps={{
                  className: classes.textField
                }}
              />
              <Button 
                className={classes.submitButton}
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                onClick={handlePasswordReset}
              >
                Submit
              </Button>
            </Container>
          </StepContent>
        </Step>
      </Stepper>
      {
        passwordReset
          ? <Typography className={classes.message} align="center" variant="h6">
              Success! Your password has been reset. Click <Link href="/">here</Link> to login.
            </Typography>
          : false
      }
    </main>
  );
}
