import { MouseEventHandler } from 'react';
import StyledButton from './Button.style';

export type ButtonT = {
  onClick?: MouseEventHandler;
  className?: string;
  text: string;
  color?: ColorT;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

export type ColorT = 'transparent' | 'blue' | 'disabled';

export type StyledButtonPropsT = Omit<ButtonT, 'text'>;

const Button = ({
  onClick,
  className = '',
  text = '',
  color,
  type = 'button',
  disabled = false,
}: ButtonT) => {
  return (
    <StyledButton
      data-testid="ClickIndicator"
      onClick={onClick}
      className={className}
      color={disabled ? 'disabled' : color}
      type={type}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
