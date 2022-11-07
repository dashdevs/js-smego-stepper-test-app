import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';

type ButtonT = {
  onClick?: MouseEventHandler;
  className?: string;
  text: string;
  color?: ColorT;
  type?: 'submit' | 'button';
  disabled?: boolean;
};

type StyledButtonPropsT = Omit<ButtonT, 'text'>;

const StyledButton = styled.button<StyledButtonPropsT>`
  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 26px;
  ${(props) => getButtonColor(props.color)}
`;

const transparent = css`
  background: transparent;
  border: 1px solid #2b64f5;
  color: #2b64f5;
`;

const blue = css`
  background: #2b64f5;
  color: #ffffff;
  border: 1px solid #2b64f5;
`;

const disabled = css`
  background: #b2b2b2;
  color: #ffffff;
  border: 1px solid #b2b2b2;
  cursor: default;
`;

type ColorT = 'transparent' | 'blue' | 'disabled';

const colorToStyleMap: { [$key: string]: any } = { transparent, blue, disabled };

const getButtonColor = (size: ColorT = 'blue') => {
  return colorToStyleMap[size];
};

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
