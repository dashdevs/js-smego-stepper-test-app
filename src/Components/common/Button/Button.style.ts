import styled, { css } from 'styled-components';
import { ColorT, StyledButtonPropsT } from './Button';

export default styled.button<StyledButtonPropsT>`
  padding: 15px 30px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 26px;
  ${(props) => getButtonColor(props.color)}
`;

export const transparent = css`
  background: transparent;
  border: 1px solid #2b64f5;
  color: #2b64f5;
`;

export const blue = css`
  background: #2b64f5;
  color: #ffffff;
  border: 1px solid #2b64f5;
`;

export const disabled = css`
  background: #b2b2b2;
  color: #ffffff;
  border: 1px solid #b2b2b2;
  cursor: default;
`;

const colorToStyleMap: { [$key: string]: any } = { transparent, blue, disabled };

const getButtonColor = (size: ColorT = 'blue') => {
  return colorToStyleMap[size];
};
