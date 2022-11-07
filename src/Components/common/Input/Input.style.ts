import styled, { css } from 'styled-components';
import { Field } from 'formik';

const onTop = css`
  top: 5px;
`;

export const StyledInput = styled(Field)`
  &:focus + .label {
    top: 4px;
  }

  .label {
    ${(props) => props.isvalue && onTop}
  }

  &:not([value='']) ~ .label {
    top: 4px;
  }

  &::placeholder {
    opacity: 0;
  }

  font-size: 16px;
  padding: 26px 14px 20px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  color: #000000;
  width: 100%;
  margin-bottom: 10px;
`;

export const InputContent = styled.div`
  width: 100%;
  position: relative;

  .label {
    user-select: none;
    position: absolute;
    color: #b2b2b2;
    top: 25px;
    left: 15px;
    transition: all 0.1s ease-in-out;
  }

  .errorMessage {
    padding: 0 5px 8px 20px;
    display: block;
    color: #ff7064;
    font-size: 12px;
  }
`;
