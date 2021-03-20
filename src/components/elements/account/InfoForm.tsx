import {Container} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, {FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkAction} from 'redux-thunk';
import {setError} from '../../../actions/authActions';
import {AuthAction} from '../../../actions/types';
import {FetchStatus} from '../../../api/definitions/misc';
import {RootState} from '../../../store';
import UIButton from '../ui/Button';

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

type AccountInfoFormProps<T> = {
  title: string,
  buttonTextDefault: string,
  buttonTextLoading?: string,
  accountInfoData: T,
  onDispatch: (data: T, onError: () => void) => ThunkAction<void, RootState, null, AuthAction>,
  footer: JSX.Element,
}

export const AccountInfoForm = <T, >(props: React.PropsWithChildren<AccountInfoFormProps<T>>) => {
  const {title, buttonTextDefault, buttonTextLoading, accountInfoData, onDispatch, children, footer} = props;

  const [fetchStatus, setFetchStatus] = useState<FetchStatus<any>>({
    fetched: false,
    fetching: false,
  });

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
    setFetchStatus({
      fetching: true,
      fetched: false,
    });
    dispatch(onDispatch(
      accountInfoData,
      () => {
        setFetchStatus({
          fetching: false,
          fetched: true,
        });
      },
    ));
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">{title}</Typography>
        {error && <span>{error}</span>}
        <form className={classes.form} onSubmit={onSubmit}>
          {children}
          <UIButton
            text={fetchStatus.fetching ? buttonTextLoading || 'Loading...' : buttonTextDefault}
            disabled={fetchStatus.fetching}
            type="submit"
            color="primary"
            className={classes.submit}
            variant="contained"
          />
          {footer}
        </form>
      </div>
    </Container>
  );
};
