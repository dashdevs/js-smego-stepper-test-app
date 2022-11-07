import styled, { css } from 'styled-components';

type StepperProgressT = {
  stepsTitles: Array<string>;
  step: number;
};

type StepT = 'finishedStep' | 'currentStep' | 'untouchedStep';

type StepPropsT = {
  stepStatus: StepT;
};

const StepsContainer = styled.div`
  max-width: 220px;
  font-size: 16px;

  .percents {
    color: #2b64f5;
    padding-bottom: 10px;
  }
`;

const Step = styled.div<StepPropsT>`
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

const finishedStep = css`
  color: #2b64f5;
  border-left: 2px solid #2b64f5;
`;

const currentStep = css`
  color: #7f7f7f;
  border-left: 2px solid #7f7f7f;
`;

const untouchedStep = css`
  color: #b2b2b2;
  border-left: 2px solid #b2b2b2;
`;

const BlueCheckMark = styled.div`
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

const StepperProgress = ({ stepsTitles, step }: StepperProgressT) => {
  const stepPercents = (100 / (stepsTitles.length + 1)) * step;

  return (
    <StepsContainer>
      <div className="percents">
        {step !== stepsTitles.length ? `${stepPercents.toFixed(0)}%` : '100%'}
      </div>

      {stepsTitles.map((stepTitle, index) => {
        if (index < step) {
          return (
            <Step stepStatus="finishedStep" key={stepTitle}>
              <div className="text">{stepTitle} </div>

              <BlueCheckMark>&#10003;</BlueCheckMark>
            </Step>
          );
        }

        if (index === step) {
          return (
            <Step stepStatus="currentStep" key={stepTitle}>
              <span className="text">{stepTitle}</span>
            </Step>
          );
        }

        return (
          <Step stepStatus="untouchedStep" key={stepTitle}>
            <span className="text">{stepTitle}</span>
          </Step>
        );
      })}
    </StepsContainer>
  );
};

export default StepperProgress;
