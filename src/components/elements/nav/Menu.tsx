import React from 'react';
import {makeStyles, Button} from '@material-ui/core';
import UIButton from '../../elements/ui/Button';
import {useSelector, useDispatch} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import {navBarItems} from './Items';
import {rootState} from '../../../reducers';
import {signOut} from '../../../actions/authActions';

const useStyles = makeStyles(() => ({
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
}));

const IsNotLoggedInItems = () => {
  const style = useStyles();
  return (
    <>
      <Button
        className={style.menuButton}
        color="inherit"
        key={navBarItems[0].label}
        to={navBarItems[0].link}
        component={RouterLink}
      >
        {navBarItems[0].label}
      </Button>
      <Button
        className={style.menuButton}
        to={navBarItems[1].link}
        color="inherit"
        component={RouterLink}
        key={navBarItems[1].label}
      >
        {navBarItems[1].label}
      </Button>
    </>
  );
};

const IsLoggedInItems = () => {
  const style = useStyles();
  const dispatch = useDispatch();
  // this fucntion does stuff
  // eslint-disable-next-line require-jsdoc
  function handleClick() {
    dispatch(signOut());
  };

  return (
    <>
      <UIButton
        className={style.menuButton}
        color="secondary"
        onClick={handleClick}
        key={navBarItems[2].label}
        text={navBarItems[2].label}
        variant="contained"
      />
    </>
  );
};

export const NavMenu = () => {
  const isAuthenticated = useSelector((state: rootState) => state.auth.authenticated);

  return (
    <>
      <div>
        {isAuthenticated ? <IsLoggedInItems/> : <IsNotLoggedInItems/>}
      </div>

    </>
  );
};
