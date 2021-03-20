import React from 'react';

import UIInput, {InputProps} from '../ui/Input';

type InputPasswordProps = InputProps & {
  password?: string,
  onValueChanged: (newValue: string) => void,
};

const InputPassword = (props: InputPasswordProps) => {
  const {password, name, placeholder, label, value, onValueChanged} = props;

  return (
    <UIInput
      {...props}
      type="password"
      name={name || 'password'}
      value={password || value}
      onValueChanged={onValueChanged}
      placeholder={placeholder || 'Password'}
      label={label || 'Password'}
    />
  );
};

export default InputPassword;
