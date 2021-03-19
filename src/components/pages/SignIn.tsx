import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setError, signIn} from '../../actions/authActions';
import AppPaths from '../../const/paths';
import {RootState} from '../../store';
import Copyright from '../elements/Copyright';
import Message from '../elements/Message';
import UIButton from '../elements/ui/Button';

import UIInput from '../elements/ui/Input';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = () => {
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
    dispatch(signIn({email, password}, () => setLoading(false)));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          {error && <Message type="error">{error}</Message>}
          <UIInput
            type="email"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="Email address"
            label="Email Address"
          />
          <UIInput
            type="password"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            placeholder="Password"
            label="Password"
          />
          <UIButton
            text={loading ? 'Loading...' : 'Sign In'}
            disabled={loading}
            type="submit"
            color="primary"
            className={classes.submit}
            variant="contained"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={AppPaths.SIGN_UP} variant="body2">
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Copyright/>
    </Container>
  );
};
