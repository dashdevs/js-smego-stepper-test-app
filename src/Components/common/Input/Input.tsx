import { Field, ErrorMessage, useField } from 'formik';
import styled, { css } from 'styled-components';

const onTop = css`
  top: 5px;
`;

const StyledInput = styled(Field)`
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

const PageContent = styled.div`
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

type InputT = {
  className?: string;
  placeholder: string;
  name: string;
  type: 'email' | 'number' | 'text';
};

const Input = ({ className = '', placeholder = '', name, type }: InputT) => {
  const [fieldOpt] = useField(name);

  return (
    <PageContent>
      <StyledInput
        autoCorrect="off"
        autoComplete="off"
        name={name}
        type={type}
        className={className}
        id={name}
        isvalue={!!fieldOpt.value}
        value={fieldOpt.value}
      />

      <label htmlFor={name} className="label">
        {placeholder}
      </label>

      <ErrorMessage name={name}>{(msg) => <div className="errorMessage">{msg}</div>}</ErrorMessage>
    </PageContent>
  );
};

export default Input;
