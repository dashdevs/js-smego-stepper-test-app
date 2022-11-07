import { ErrorMessage, useField } from 'formik';
import { StyledInput, InputContent } from './Input.style';

type InputT = {
  className?: string;
  placeholder: string;
  name: string;
  type: 'email' | 'number' | 'text';
};

const Input = ({ className = '', placeholder = '', name, type }: InputT) => {
  const [fieldOpt] = useField(name);

  return (
    <InputContent>
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
    </InputContent>
  );
};

export default Input;
