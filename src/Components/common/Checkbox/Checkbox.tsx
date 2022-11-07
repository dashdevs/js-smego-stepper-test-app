import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import React from 'react';

const PageContent = styled.label`
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

const StyledCheckbox = styled(Field)`
  width: 20px;
  height: 20px;
  border-color: #cccccc;
  padding-right: 10px;

  &:checked {
    background: #2b64f5;
    border-color: #2b64f5;
  }
`;

const StyledError = styled.div`
  padding: 10px 5px 8px 20px;
  display: block;
  color: #ff7064;
  font-size: 12px;
`;

type CheckBoxT = {
  children: React.ReactElement | Array<React.ReactElement> | string;
  name: string;
};

const Checkbox = ({ children, name }: CheckBoxT) => {
  return (
    <>
      <PageContent>
        <StyledCheckbox type="checkbox" name={name} />

        <span className="text">{children}</span>
      </PageContent>

      <ErrorMessage name={name}>
        {(msg) => <StyledError className="errorMessage">{msg}</StyledError>}
      </ErrorMessage>
    </>
  );
};

export default Checkbox;
