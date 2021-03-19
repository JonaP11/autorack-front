import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setError, signup} from '../../actions/authActions';
import AppPaths from '../../const/paths';
import {RootState} from '../../store';
import Message from '../elements/Message';
import UIButton from '../elements/ui/Button';
import UIInput from '../elements/ui/Input';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
          AutoRack
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const {error} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signup({email, password, firstName}, () => setLoading(false)));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        {error && <span>{error}</span>}
        <form className={classes.form} onSubmit={onSubmit}>
          {error && <Message type="error">{error}</Message>}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <UIInput
                name="firstName"
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                placeholder="First Name"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UIInput
                name="lastName"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                placeholder="Last Name"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <UIInput
                type="email"
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Email address"
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <UIInput
                type="password"
                name="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="Password"
                label="Password"
              />
            </Grid>
          </Grid>
          <UIButton
            text={loading ? 'Loading...' : 'Sign Up'}
            disabled={loading}
            type="submit"
            color="primary"
            className={classes.submit}
            variant="contained"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={AppPaths.SIGN_IN} variant="body2">
                  Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};
