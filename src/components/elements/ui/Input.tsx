import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import React, {InputHTMLAttributes} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & TextFieldProps & {
  // Shorthand property
  onValueChanged?: (newValue: string) => void,
};

const UIInput = (props: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    props.onValueChanged?.(e.target.value);
  };

  return <TextField variant="outlined" margin="normal" required fullWidth {...props} onChange={onChange}/>;
};

export default UIInput;
