import React, {FC, InputHTMLAttributes} from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const UIInput: FC<IInputProps> = ({type = 'text', name, value,
  onChange, placeholder, label}: IInputProps) => {
  return (
    <TextField
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      label={label}
      variant="outlined"
      margin="normal"
      required
      fullWidth
    />
  );
};

UIInput.propTypes = {
  type: PropTypes.any,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};


export default UIInput;
