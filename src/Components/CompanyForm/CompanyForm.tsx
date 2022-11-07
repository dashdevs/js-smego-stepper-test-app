import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import CompanyFormStep from '../CompanyFormStep/CompanyFormStep';
import ContactPersonFormStep from '../ContactPersonFormStep/ContactPersonFormStep';
import { initialState, nextStep, previousStep } from '../../store/modules/stepper';
import { Button } from '../common';
import { stepTitles } from '../../Pages/Home/Home.constants';

type CompanyFormT = { step: number };

const validationSchemasSteps = [
  Yup.object().shape({}),
  Yup.object().shape({
    companyCode: Yup.number().required('Company Code is required'),
    companyName: Yup.string().required('Company Name is required'),
    companyRegistration: Yup.string().required('Surname is required'),
  }),
  Yup.object().shape({
    name: Yup.string().required('Name is required'),
    surname: Yup.string().required('Surname is required'),
    jobTitle: Yup.string().required('Job title is required'),
    countryCode: Yup.number()
      .typeError('Country code should be a valid number')
      .positive()
      .min(1)
      .required('Country code is required'),
    phoneNumber: Yup.number()
      .typeError('Phone number should be a valid number')
      .positive()
      .min(1)
      .required('Phone is required'),
    privacyPolicy: Yup.bool().oneOf([true], 'Privacy policy title is required'),
    partnership: Yup.bool().oneOf([true], 'Partnership policy title is required'),
  }),
];

const ButtonsWrapper = styled.div`
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

const StepWrapper = styled.div`
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

const Title = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 20px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CompanyForm = ({ step }: CompanyFormT) => {
  const dispatch = useDispatch();
  const numberOfSteps = stepTitles.length;
  const isLastStep = step === numberOfSteps;
  const isFirstStep = step === 0;

  const { fields } = initialState;
  const renderStepComponent = (step: number) => {
    switch (step) {
      case 1:
        return <CompanyFormStep />;
      case 2:
        return <ContactPersonFormStep />;
      default:
        return <div>No Step</div>;
    }
  };

  const nextFormStep = () => {
    dispatch(nextStep());
  };

  const prevFormStep = () => {
    dispatch(previousStep());
  };

  const handleSubmit = (
    values: any,
    actions: { setTouched: (arg0: {}) => void; setSubmitting: (arg0: boolean) => void },
  ) => {
    actions.setTouched({});

    if (isLastStep) {
      submitForm(values);

      return;
    }

    actions.setSubmitting(false);
    nextFormStep();
  };

  const submitForm = (props: any) => {
    console.log(props, 'On Submit');
  };

  return (
    <Formik
      initialValues={fields}
      onSubmit={handleSubmit}
      validationSchema={
        validationSchemasSteps[step] ? validationSchemasSteps[step] : Yup.object().shape({})
      }
    >
      {(props) => (
        <StyledForm id={'form ' + step} onSubmit={props.handleSubmit}>
          <Title>{stepTitles[step]}</Title>

          <StepWrapper>{renderStepComponent(step)}</StepWrapper>

          <ButtonsWrapper>
            <Button disabled={isFirstStep} onClick={prevFormStep} color="transparent" text="Back" />
            <Button text={isLastStep ? 'Submit' : 'Next'} type={'submit'} />
          </ButtonsWrapper>
        </StyledForm>
      )}
    </Formik>
  );
};

export default CompanyForm;
