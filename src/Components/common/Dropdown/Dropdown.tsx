import React from 'react';
import Select, { SingleValue } from 'react-select';
import { ErrorMessage, useField } from 'formik';
import DropdownContent, { customDropdownStyles } from './Dropdown.style';

type Option = { label: string; value: string };

type DropdownT = { name: string; options: Array<Option> };

const Dropdown = ({ name, options }: DropdownT) => {
  //eslint-disable-next-line
  const [fieldOpt, extendedFieldOpt, fieldActions] = useField(name);

  return (
    <DropdownContent>
      <Select
        placeholder={name}
        styles={customDropdownStyles}
        name={name}
        options={options}
        defaultValue={
          options ? options.find((option) => option.value === fieldOpt.value) : options[0]
        }
        onChange={(option: SingleValue<Option>) => fieldActions.setValue(option?.value)}
      />

      <ErrorMessage name={name}>{(msg) => <div className="errorMessage">{msg}</div>}</ErrorMessage>
    </DropdownContent>
  );
};

export default Dropdown;
