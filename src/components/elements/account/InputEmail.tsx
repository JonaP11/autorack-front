import React from 'react';

import UIInput, {InputProps} from '../ui/Input';

type InputEmailProps = InputProps & {
  email?: string,
  onValueChanged?: (newValue: string) => void,
};

const InputEmail = (props: InputEmailProps) => {
  const {email, name, placeholder, label, value, onValueChanged} = props;

  return (
    <UIInput
      {...props}
      type="email"
      name={name || 'email'}
      value={email || value}
      onValueChanged={onValueChanged}
      placeholder={placeholder || 'Email address'}
      label={label || 'Email Address'}
    />
  );
};

export default InputEmail;
