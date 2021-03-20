import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, {useState} from 'react';
import {signUp} from '../../actions/authActions';
import {SignUpData} from '../../actions/types';
import AppPaths from '../../const/paths';
import {AccountInfoForm} from '../elements/account/InfoForm';
import InputEmail from '../elements/account/InputEmail';
import {InputName} from '../elements/account/InputName';
import InputPassword from '../elements/account/InputPassword';


const SignUpFooter = () => {
  return (
    <Grid container justify="flex-end">
      <Grid item>
        <Link href={AppPaths.SIGN_IN} variant="body2">
          Already have an account? Sign in
        </Link>
      </Grid>
    </Grid>
  );
};

export const SignUp = () => {
  const [accountInfo, setAccountInfo] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const updateAccountInfo = (key: string) => (newValue: string) => {
    setAccountInfo({...accountInfo, [key]: newValue});
  };

  return (
    <AccountInfoForm
      title="Sign up"
      buttonTextDefault="Sign up"
      accountInfoData={accountInfo}
      onDispatch={signUp}
      footer={<SignUpFooter/>}
    >
      <Grid container spacing={2}>
        <InputName
          firstValue={accountInfo.firstName}
          firstOnChanged={updateAccountInfo('firstName')}
          lastValue={accountInfo.lastName}
          lastOnChanged={updateAccountInfo('lastName')}
        />
        <Grid item xs={12}>
          <InputEmail email={accountInfo.email} onValueChanged={updateAccountInfo('email')}/>
        </Grid>
        <Grid item xs={12}>
          <InputPassword password={accountInfo.password} onValueChanged={updateAccountInfo('password')}/>
        </Grid>
      </Grid>
    </AccountInfoForm>
  );
};
