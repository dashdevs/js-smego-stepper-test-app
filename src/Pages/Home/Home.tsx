import { useSelector } from 'react-redux';
import StepperProgress from '../../Components/StepperProgress/StepperProgress';
import { stepTitles } from './Home.constants';
import { Layout, Card } from 'Components/common';
import CompanyForm from '../../Components/CompanyForm/CompanyForm';
import { StepperT } from '../../store/modules/stepper';
import {
  FirstColumnContent,
  SecondColumnContent,
  HeaderWrapper,
} from '../../Components/common/Layout/Layout';
import Header from '../../Components/Header/Header';

type StateT = {
  stepper: StepperT;
};

const Home = () => {
  const step = useSelector((state: StateT) => state?.stepper?.step);

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <FirstColumnContent>
        <StepperProgress stepsTitles={stepTitles} step={step} />
      </FirstColumnContent>

      <SecondColumnContent>
        <Card>
          <CompanyForm step={step} />
        </Card>
      </SecondColumnContent>
    </Layout>
  );
};

export default Home;
