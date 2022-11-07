import styled from 'styled-components';
import { Form } from 'formik';

export const ButtonsWrapper = styled.div`
  display: flex;
  max-width: 575px;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0 40px;

  @media (max-width: 1440px) {
    max-width: 360px;
  }

  @media (max-width: 767px) {
    max-width: 575px;
    padding: 30px 20px 20px;
  }
`;

export const StepWrapper = styled.div`
  padding-top: 60px;
  max-width: 575px;

  width: 100%;

  @media (max-width: 1440px) {
    max-width: 360px;
  }

  @media (max-width: 767px) {
    max-width: 575px;
    padding: 30px 20px 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 20px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
