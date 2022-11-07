import React from 'react';
import { ErrorMessage } from 'formik';
import StyledCheckbox, { CheckboxContent, StyledError } from './Checkbox.style';

type CheckBoxT = {
  children: React.ReactElement | Array<React.ReactElement> | string;
  name: string;
};

const Checkbox = ({ children, name }: CheckBoxT) => {
  return (
    <>
      <CheckboxContent>
        <StyledCheckbox type="checkbox" name={name} />

        <span className="text">{children}</span>
      </CheckboxContent>

      <ErrorMessage name={name}>
        {(msg) => <StyledError className="errorMessage">{msg}</StyledError>}
      </ErrorMessage>
    </>
  );
};

export default Checkbox;
