import TextField, {TextFieldProps} from '@material-ui/core/TextField';
import React from 'react';

export type InputProps = TextFieldProps & {
  // Shorthand property for `onChange`
  onValueChanged?: (newValue: string) => void,
};

const UIInput = ({onChange, onValueChanged, ...props}: InputProps) => {
  // https://stackoverflow.com/a/50196327/11571888 for the reason of such expansion
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onValueChanged?.(e.target.value);
  };

  return <TextField variant="outlined" margin="normal" required fullWidth {...props} onChange={onChangeHandler}/>;
};

export default UIInput;
