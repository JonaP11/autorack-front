import React, {FC, ButtonHTMLAttributes} from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled: boolean | undefined;
  type: any;
  color: any;
  className: string;
  variant: any;
}

const UIButton: FC<IButtonProps> = ({text, onClick, type, disabled,
  color, className, variant}: IButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
      type={type}
      color={color}
      fullWidth
    >
      {text}
    </Button>
  );
};

UIButton.propTypes = {
  onClick: PropTypes.any,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.any,
  color: PropTypes.any,
  className: PropTypes.any,
  variant: PropTypes.any,
};

export default UIButton;
