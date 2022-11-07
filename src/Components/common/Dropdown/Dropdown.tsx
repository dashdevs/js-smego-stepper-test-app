import React from 'react';
import Select, { SingleValue } from 'react-select';
import { ErrorMessage, useField } from 'formik';
import styled from 'styled-components';

type Option = { label: string; value: string };

type DropdownT = { name: string; options: Array<Option> };

const PageContent = styled.div`
  width: 100%;

  .errorMessage {
    padding: 0 5px 8px 20px;
    display: block;
    color: #ff7064;
    font-size: 12px;
  }
`;

const customStyles = {
  control: (styles: any) => ({ ...styles, height: 65, borderRadius: '8px' }),
  singleValue: (styles: any) => ({ ...styles, color: '#000000' }),
  menu: (styles: any) => ({ ...styles, color: '#000000' }),
};

const Dropdown = ({ name, options }: DropdownT) => {
  //eslint-disable-next-line
  const [fieldOpt, extendedFieldOpt, fieldActions] = useField(name);

  return (
    <PageContent>
      <Select
        placeholder={name}
        styles={customStyles}
        name={name}
        options={options}
        defaultValue={
          options ? options.find((option) => option.value === fieldOpt.value) : options[0]
        }
        onChange={(option: SingleValue<Option>) => fieldActions.setValue(option?.value)}
      />

      <ErrorMessage name={name}>{(msg) => <div className="errorMessage">{msg}</div>}</ErrorMessage>
    </PageContent>
  );
};

export default Dropdown;
