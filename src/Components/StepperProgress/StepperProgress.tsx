import { StepsContainer, Step, BlueCheckMark } from './StepperProgress.style';

export type StepperProgressT = {
  stepsTitles: Array<string>;
  step: number;
};

export type StepT = 'finishedStep' | 'currentStep' | 'untouchedStep';

export type StepPropsT = {
  stepStatus: StepT;
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
