import styled, { css } from 'styled-components';
import { StepPropsT, StepT } from './StepperProgress';

export const StepsContainer = styled.div`
  max-width: 220px;
  font-size: 16px;

  .percents {
    color: #2b64f5;
    padding-bottom: 10px;
  }
`;

export const Step = styled.div<StepPropsT>`
  max-width: 220px;
  width: 100%;
  margin-bottom: 1px;
  min-height: 50px;
  display: flex;
  margin-left: 10px;
  vertical-align: middle;
  align-items: center;

  .text {
    padding: 15px 10px 15px 25px;
    white-space: nowrap;
  }

  ${(props) => getStepByStatus(props.stepStatus)}
`;

export const finishedStep = css`
  color: #2b64f5;
  border-left: 2px solid #2b64f5;
`;

export const currentStep = css`
  color: #7f7f7f;
  border-left: 2px solid #7f7f7f;
`;

export const untouchedStep = css`
  color: #b2b2b2;
  border-left: 2px solid #b2b2b2;
`;

export const BlueCheckMark = styled.div`
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #2b64f5;
`;

const stepToStyleMap: { [$key: string]: any } = { currentStep, untouchedStep, finishedStep };

const getStepByStatus = (stepStatus: StepT = 'untouchedStep') => {
  return stepToStyleMap[stepStatus];
};
