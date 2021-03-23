import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {setSuccess} from '../../actions/authActions';
import {RootState} from '../../store';

const Dashboard = () => {
  const {user, success} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return <h1>Welcome {user?.firstName}</h1>;
};

export default Dashboard;
