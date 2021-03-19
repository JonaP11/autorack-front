import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import React, {InputHTMLAttributes} from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps;

const UIInput = (props: InputProps) => {
  return <TextField variant="outlined" margin="normal" required fullWidth {...props}/>;
};

export default UIInput;
