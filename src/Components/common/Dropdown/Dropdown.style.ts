import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .errorMessage {
    padding: 0 5px 8px 20px;
    display: block;
    color: #ff7064;
    font-size: 12px;
  }
`;

export const customDropdownStyles = {
  control: (styles: any) => ({ ...styles, height: 65, borderRadius: '8px' }),
  singleValue: (styles: any) => ({ ...styles, color: '#000000' }),
  menu: (styles: any) => ({ ...styles, color: '#000000' }),
};
