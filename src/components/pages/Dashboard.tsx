import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '../../state/store';

const Dashboard = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return <h1>Welcome {user?.firstName}</h1>;
};

export default Dashboard;
