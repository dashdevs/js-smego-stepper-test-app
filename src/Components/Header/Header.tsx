import { Layout } from '../common';
import styled, { css } from 'styled-components';

const LogoWrapper = styled.div`
  grid-column: 1/5;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    grid-column: 1/5;
  }
`;

const HeaderTitleWrapper = styled.div`
  grid-column: 5/11;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    grid-column: 5/11;
  }

  @media (max-width: 767px) {
    grid-column: 1/5;
  }

  .title {
    font-size: 28px;
    line-height: 58px;
    color: #000000;
  }

  .link {
    text-decoration: none;
    font-size: 16px;
    line-height: 60px;
    color: #2b64f5;
  }
`;

const StyledLayout = css`
  grid-template-rows: 80px;

  @media (max-width: 767px) {
    grid-template-rows: repeat(2, 40px);
  }
`;

const LogoText = styled.span`
  font-size: 35px;
  color: #2b64f5;
  line-height: 75px;
  font-weight: 600;
`;

const LogoIcon = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const LogoIconTop = styled.div`
  background: #2b64f5;
  width: 20px;
  height: 7px;
`;

const LogoIconMiddle = styled.div`
  background: #2b64f5;
  width: 10px;
  height: 7px;
`;

const LogoIconBottom = styled.div`
  background: #2b64f5;
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <Layout styles={StyledLayout}>
      <LogoWrapper>
        <LogoText>smeGo</LogoText>

        <LogoIcon>
          <LogoIconTop />
          <LogoIconMiddle />
          <LogoIconBottom />
        </LogoIcon>
      </LogoWrapper>
      <HeaderTitleWrapper>
        <span className="title">Application</span>

        <a href="/" className="link">
          Fill in later
        </a>
      </HeaderTitleWrapper>
    </Layout>
  );
};

export default Header;
