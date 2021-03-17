import React, {useState, FormEvent, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Message from '../elements/Message';
import {signup, setError} from '../../actions/authActions';
import {RootState} from '../../store';
import UIButton from '../elements/Button';
import UIInput from '../elements/Input';

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

  const submitHandler = (e: FormEvent) => {
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
        <form className={classes.form} onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <UIInput
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
                placeholder="First Name"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <UIInput
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
                placeholder="Last Name"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <UIInput
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email address"
                label="Email Address"
              />
            </Grid>
            <Grid item xs={12}>
              <UIInput
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
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
              <Link href="/signin" variant="body2">
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

export default SignUp;
