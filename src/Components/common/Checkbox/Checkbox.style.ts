import styled from 'styled-components';
import { Field } from 'formik';

export const CheckboxContent = styled.label`
  font-size: 14px;
  color: #7f7f7f;
  min-height: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr;

  .text {
    margin: 7px auto auto 20px;
    line-height: 20px;
  }
`;

export default styled(Field)`
  width: 20px;
  height: 20px;
  border-color: #cccccc;
  padding-right: 10px;

  &:checked {
    background: #2b64f5;
    border-color: #2b64f5;
  }
`;

export const StyledError = styled.div`
  padding: 10px 5px 8px 20px;
  display: block;
  color: #ff7064;
  font-size: 12px;
`;
